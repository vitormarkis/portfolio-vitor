import moment from "moment"
import React from "react"
moment.locale("pt-br")
import twc from "tailwindcss/colors"

import { useBlogFeed } from "@/state/blogFeed"
import { SortAscendingIcon } from "@/components/SortAscendingIcon"
import { SortDescendingIcon } from "@/components/SortDescendingIcon"
import { OptionButton } from "@/components/OptionButton"

export function SortBlogContent() {
  const { isSortingAscending, setIsSortingAscending } = useBlogFeed()
  return (
    <>
      <div className="flex flex-col mb-6">
        <OptionButton
          Icon={SortDescendingIcon}
          active={isSortingAscending}
          activeColor={twc.violet["600"]}
          text="Data crescente"
          activeFontWeight="500"
          iconSize={20}
          onClick={() => (isSortingAscending ? null : setIsSortingAscending(true))}
        />
        <OptionButton
          Icon={SortAscendingIcon}
          active={!isSortingAscending}
          activeColor={twc.violet["600"]}
          text="Data decrescente"
          activeFontWeight="500"
          iconSize={20}
          onClick={() => (isSortingAscending ? setIsSortingAscending(false) : null)}
        />
      </div>
    </>
  )
}
