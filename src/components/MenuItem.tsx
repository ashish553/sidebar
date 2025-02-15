import { CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'


interface MenuItemProps {
    // children: React.ReactNode;
    icon: React.ComponentType;
    title: string;
}

function MenuItem({ icon: Icon, title }: MenuItemProps) {
    const [open, setopen] = useState(false)
    return (
        <div className="flex justify-between mb-4">
            <div className="flex gap-4">
                <Icon />
                <h3>{title}</h3>
            </div>
            <CollapsibleTrigger onClick={()=>{
                setopen(!open)
            }}>
                {open ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            </CollapsibleTrigger>
        </div>
    )
}

export default MenuItem