import { Collapsible, CollapsibleContent } from '@radix-ui/react-collapsible'
import React from 'react'
import MenuItem from './MenuItem'

interface Item {
  title: string;
  icon: React.ComponentType;
  links: { href: string; title: string }[];
}

interface CollapsibleItemListProps {
  itemsList: Item[];
}

function CollapsibleItemList({ itemsList }: CollapsibleItemListProps) {
  return (
        itemsList.map(eachItem => {
          return (
            <Collapsible className="mb-8" key={eachItem.title}>
              <MenuItem title={eachItem.title} icon={eachItem.icon} />
              <CollapsibleContent>
                <div className="flex flex-col ml-12 gap-4">
                  {eachItem.links.map((eachLink) => {
                    return (
                        <a key={eachLink.href} href={eachLink.href} className="cursor-pointer">{eachLink.title}</a>
                    )
                  })}
                </div>
              </CollapsibleContent>
            </Collapsible>
          )
        })
  )
}

export default CollapsibleItemList