import { FloatingPositionModifier, Placement, Side } from '../types';
import { axisAlignmentToSide, axisToDimension, sideToAlignment, sideToOppositeSide } from '../maps';
import {
    applyModifiers,
    getFloatingCoords,
    getFloatingContext,
    calcOverflow,
    CalcOverflowOptions,
} from '../utils';
import { changePlacement } from '../utils/getFloatingPosition/changePlacement';

export interface FlipOptions extends CalcOverflowOptions {
    /**
     * Проверка переполнения по основной оси
     * @default true
     */
    mainAxis?: boolean;
    /**
     * Проверка переполнения по оси выравнивания
     * @default false
     */
    altAxis?: boolean;
    /**
     * Расстояние от границы переполнения, на котором начинает происходить переворот
     * @default 8
     * */
    edgeOffset?: number;
}

export const flip = (options?: FlipOptions): FloatingPositionModifier => (
    position,
    context,
) => {
    const {
        side,
        alignment,
        altAxis,
        rects,
        anchor,
        floating,
        placement,
        arrangement,
    } = context;

    const flippedPlacement = {
        side,
        alignment,
    };

    const {
        mainAxis: checkMainAxis = true,
        altAxis: checkAltAxis = false,
        edgeOffset = 8,
        ...calcOverflowOptions
    } = options ?? {};

    const overflow = calcOverflow(
        {
            ...position,
            rects,
            anchor,
            floating,
            arrangement,
            offset: edgeOffset,
            ...calcOverflowOptions,
        },
    );

    const mainOverflow = overflow[side];

    const checkOppositeOverflow = (oppositeSide: Side, marker = oppositeSide): number => {
        const newContext = getFloatingContext({
            placement: oppositeSide,
            anchor,
            floating,
            arrangement,
        });

        const newPosition = applyModifiers({
            position: getFloatingCoords(newContext),
            context: {
                ...newContext,
                modifiersData: {
                    previous: [],
                },
            },
            modifiers: context.modifiersData.previous,
        });

        const oppositeOverflow = calcOverflow({
            rects: newContext.rects,
            anchor,
            floating,
            arrangement,
            offset: edgeOffset,
            ...calcOverflowOptions,
            ...newPosition,
        });

        return oppositeOverflow[marker];
    };

    if (checkMainAxis && mainOverflow > 0) {
        const oppositeSide = sideToOppositeSide[side];
        const oppositeOverflow = checkOppositeOverflow(oppositeSide);

        if (oppositeOverflow < mainOverflow // TODO 'bestFit'
        ) {
            flippedPlacement.side = oppositeSide;
        }
    }

    if (alignment) {
        const alignmentSide = axisAlignmentToSide[altAxis][alignment];

        const alignmentDimension = axisToDimension[altAxis];

        const alignmentOverflowMarker = rects.anchor[alignmentDimension] < rects.floating[alignmentDimension]
            ? sideToOppositeSide[alignmentSide]
            : alignmentSide;

        if (checkAltAxis && alignmentSide && overflow[alignmentOverflowMarker] > 0) {
            const oppositeAlignmentSide = sideToOppositeSide[alignmentSide];
            const oppositeMarker = sideToOppositeSide[alignmentOverflowMarker];
            const oppositeAlignmentSideOverflow = checkOppositeOverflow(oppositeAlignmentSide, oppositeMarker);

            if (oppositeAlignmentSideOverflow <= 0
                || oppositeAlignmentSideOverflow < overflow[alignmentOverflowMarker] // TODO 'bestFit'
            ) {
                flippedPlacement.alignment = sideToAlignment[oppositeAlignmentSide];
            }
        }
    }

    const newPlacement: Placement = flippedPlacement.alignment
        ? `${flippedPlacement.side}-${flippedPlacement.alignment}`
        : flippedPlacement.side;

    if (newPlacement !== placement) {
        const newContext = getFloatingContext({
            placement: newPlacement,
            anchor,
            floating,
            arrangement,
        });

        changePlacement(newPlacement, context);

        const newPosition = getFloatingCoords(newContext);

        const prevMods = context.modifiersData.previous;

        return applyModifiers({
            position: newPosition,
            context: {
                ...newContext,
                modifiersData: { previous: [] },
            },
            modifiers: prevMods,
        });
    }

    return position;
};
