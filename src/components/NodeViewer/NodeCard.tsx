import { Node, getNodeAddress } from "../../programs/dippiesIndexProtocol";

import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import { formatValue } from "../../utils";
import useForest from "../../hooks/useForest";
import useToken from "../../hooks/useToken";
import useTokens from "../../hooks/useTokens";

export default ({ node }: { node: Node }) => {
  const { forest } = useForest();
  const { map } = useTokens();
  const token = forest ? map?.get(forest.voteMint.toString()) : undefined;
  return (
    <div className="w-64 bg-base-200 rounded-xl shadow-xl p-3 m-3">
      <div className="font-lg font-bold">{node.tags[node.tags.length - 1]}</div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div>Total stake:</div>
          <div>
            {token ? formatValue(node.stake, token.decimals).toFixed(2) : "???"}
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>Children:</div>
          <div>{node.children.length}</div>
        </div>
        <div className="flex flex-row justify-between">
          <div>Notes:</div>
          <div>{node.notes.length}</div>
        </div>
        <Link
          href={`/dip/node/${getNodeAddress(
            node.tree,
            node.parent,
            node.tags[node.tags.length - 1]
          ).toString()}`}
        >
          <div className="underline font-bold flex justify-center gap-2">
            <div>See this node</div>
            <FaExternalLinkAlt className="w-4 h-4 my-auto" />
          </div>
        </Link>
      </div>
    </div>
  );
};
