import {
    expect, Page,
    PlaywrightTestArgs,
    PlaywrightWorkerOptions,
} from '@playwright/test';
import { ComponentsListTypes } from '@e2e/constants';
import { CompareSnapshotsMapArg, ExtendedPropsType, PropsType } from '@e2e/test-utils/types';
import { getURLFromProps } from '@e2e/utils';
import { runSeriesComparisons } from '@e2e/test-utils/helpers';
import { getScreenPath } from '@e2e/test-utils/screenName';

type CompareSnapshotsOptions = Partial<PlaywrightTestArgs & PlaywrightWorkerOptions> & { page: Page }

export function compareSnapshots<Props = PropsType>({ page, headless }: CompareSnapshotsOptions, component: ComponentsListTypes) {
    return async (options: ExtendedPropsType<Props>) => {
        const {
            postfix,
            screenName: extScreenName,
            uniqSelector = `.Qx${component}`,
            quality,
            state,
            props,
            beforeSnap,
            testName,
            timeout,
            groupBy = [],
            disableSnapIfHeaded = true,
        } = options;

        const screenName = typeof extScreenName === 'string'
            ? `${extScreenName}.jpeg`
            : extScreenName ?? getScreenPath({
                component,
                postfix,
                testName,
                groupBy,
            });

        await page.goto(getURLFromProps(component, props));
        const element = await page.locator(uniqSelector);

        if (state === 'hover') {
            await element.hover();
            await page.waitForTimeout(200);
        } else if (state === 'press') {
            const box = await element.boundingBox();
            const x = (box?.x ?? 0) + (box?.width ?? 0) / 2;
            const y = (box?.y ?? 0) + (box?.height ?? 0) / 2;

            await page.mouse.move(x, y);
            await page.mouse.down();
            await page.waitForTimeout(200);
        } else if (state === 'focus') {
            await element.focus();
            await page.waitForTimeout(200);
        }

        if (timeout) {
            await page.waitForTimeout(timeout);
        }

        await beforeSnap?.(page);

        if (disableSnapIfHeaded && headless === false) { return; }

        const screenshot = await element.screenshot({
            type: 'jpeg',
            quality,
        });
        await expect(await screenshot).toMatchSnapshot(screenName);
    };
}

export function compareSnapshotsMap<Props = PropsType>(component: ComponentsListTypes) {
    return async (options: CompareSnapshotsMapArg<Props>) => {
        const {
            targetProps,
            quality,
            uniqSelector,
            commonProps: extCommonProps,
            testName = component,
            testParams,
            state,
            postfix,
            beforeSnap,
            timeout,
            groupBy,
            disableSnapIfHeaded = true,
        } = options;

        const commonProps = {
            props: extCommonProps as Props,
            quality,
            uniqSelector,
            beforeSnap,
            state,
            timeout,
        };

        await runSeriesComparisons<Props>({
            testParams,
            component,
            targetProps,
            commonProps,
            testName,
            postfix,
            groupBy,
            disableSnapIfHeaded,
        });
    };
}
