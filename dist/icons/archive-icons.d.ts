import { default as React } from 'react';

export type IconVariant = 'default' | 'gray' | 'solid';
export interface IconVariantProps {
    variant?: IconVariant;
    className?: string;
    style?: React.CSSProperties;
}
export declare const ZipIcon: {
    ({ variant, className, style }: IconVariantProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const RarIcon: {
    ({ variant, className, style }: IconVariantProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
