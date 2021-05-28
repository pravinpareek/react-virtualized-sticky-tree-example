import { StickyTree } from "react-virtualized-sticky-tree";
import { dataTree } from "./data";
import { LookCard } from "./LookCard";
import { withContentRect } from "react-measure";

export const Tree = withContentRect("bounds")(
  ({ measureRef, measure, contentRect }) => {
    const width = contentRect.bounds.width;
    const cardWidth = 120;
    const cardHeight = 220;
    const cardWrapperWidth = width / 2; // 50%
    const lookCardHeight = 500;
    const getLookCardHeight = (lookName) => {
      const productLength = dataTree[lookName]?.products?.length;
      const lookCardRow = Math.ceil(
        (cardWidth * productLength) / cardWrapperWidth
      );
      return Math.max(lookCardHeight, lookCardRow * cardHeight + 40);
    };
    const getChildren = (id) => {
      if (dataTree[id].children) {
        return dataTree[id].children.map((id) => ({
          id,
          height: getLookCardHeight(id),
          isSticky: true,
        }));
      }
    };

    const rowRenderer = ({ id, style }) => {
      const node = dataTree[id];
      return (
        <LookCard
          key={id}
          style={style}
          name={node.name}
          products={node.products}
        />
      );
    };

    return (
      <div ref={measureRef} className="sticky-wrapper">
        <StickyTree
          root={{ id: "root", height: 30 }}
          width={contentRect.bounds.width}
          height={600}
          getChildren={getChildren}
          rowRenderer={rowRenderer}
          renderRoot={true}
          overscanRowCount={20}
          renderRoot={false}
        />
      </div>
    );
  }
);
