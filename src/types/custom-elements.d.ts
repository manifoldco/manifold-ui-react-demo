// Hack until this PR is merged: https://github.com/Microsoft/TypeScript/pull/26797

declare module JSX {
  export interface IntrinsicElements {
    "manifold-connection": StencilIntrinsicElements["manifold-connection"] & {
      children?: ReactElement;
    };
    "manifold-data-product-name": StencilIntrinsicElements["manifold-data-product-name"] & {
      children?: ReactElement;
    };
    "manifold-data-product-logo": StencilIntrinsicElements["manifold-data-product-logo"] & {
      children?: ReactElement;
    };
    "manifold-marketplace": StencilIntrinsicElements["manifold-marketplace"] & {
      children?: ReactElement;
    };
    "manifold-product": StencilIntrinsicElements["manifold-product"] & {
      children?: ReactElement;
    };
    "manifold-plan-selector": StencilIntrinsicElements["manifold-plan-selector"] & {
      children?: ReactElement;
    };
    "manifold-resource-details": StencilIntrinsicElements["manifold-resource-details"] & {
      children?: ReactElement;
    };
  }
}
