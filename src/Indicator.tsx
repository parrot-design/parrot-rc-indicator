import React from 'react';
import { IIndicatorProps } from '.';
import classnames from '@parrotjs/classnames';
import './index.scss';

const Indicator = React.forwardRef((props: IIndicatorProps, ref: any) => {

    const {
        prefixCls: customizedPrefixCls = 'parrot',
        componentName = 'indicator',
        className,
        active=false
    } = props;

    const prefixCls = customizedPrefixCls + '-' + componentName;

    return (
        <button
            ref={ref}
            className={classnames(
                prefixCls,
                className,
                {
                    [`${prefixCls}-active`]:active
                }
            )}
        ></button>
    )

});

export default React.memo(Indicator);