import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { NoteWithKey } from "../../hooks/useNote";
import React from "react";
import { formatBn } from "../../utils";

export default ({ note }: { note: NoteWithKey }) => {
  return (
    <div className="w-64 bg-base-200 rounded-xl shadow-xl m-3 flex flex-col gap-2">
      <div>
        <img
          className="w-full rounded-t-xl"
          src={note.image}
          alt={note.description}
        />
      </div>
      <div className="p-3 pt-0">
        <div className="flex flex-col gap-3">
          <div className="divider text-lg font-bold">{note.description}</div>
          <div className="flex flex-row justify-between">
            <div className="font-bold">Total stake:</div>
            <div>{formatBn(note.stake)}</div>
          </div>
          <div>
            <div className="font-bold">Tags:</div>
            <div className="flex flex-wrap gap-2">
              {note.tags.map((tag) => (
                <div className="badge badge-sm badge-primary">{tag}</div>
              ))}
            </div>
          </div>
          <a href={note.website}>
            <div className="underline font-bold flex justify-center gap-2">
              <div>See this webpage</div>
              <FaExternalLinkAlt className="w-4 h-4 my-auto" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};