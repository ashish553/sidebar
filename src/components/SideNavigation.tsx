import React from 'react'
import Sidenav from './Sidenav'
import { sidebarItems, collapsibleItems } from '@/nav/data'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
import { Search } from 'lucide-react'
import CollapsibleItemList from './CollapsibleItemList'
import { Input } from './ui/input'

function SideNavigation() {
    return (
        <Sidenav>
            <Sidenav.Items>
                {
                    sidebarItems.map(eachItem => {
                        return (
                            <Sidenav.Item key={eachItem.id} id={eachItem.id} icon={eachItem.icon} />
                        )
                    })
                }
            </Sidenav.Items>

            <Sidenav.Drawers>
                {/* Home Item Navigation Content */}
                <Sidenav.Drawer id="home">
                    <div className="mb-4">
                        <h2 className="text-xl">Overview</h2>
                    </div>
                    <div className="relative w-full max-w-md my-6">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <Input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 bg-white dark:bg-[#454449] placeholder:text-[#454449] dark:placeholder:text-white dark:border-none outline-none"
                        />
                    </div>
                    <Tabs defaultValue="account" className="mb-4">
                        <TabsList className="flex justify-around mb-6">
                            <TabsTrigger value="account" className="w-[50%] pb-2 data-[state=active]:border-b-[2.5px] data-[state=active]:border-b-black dark:data-[state=active]:border-b-white border-b-gray-200 dark:border-b-[#808080] border-b-[2.5px]">My Account</TabsTrigger>
                            <TabsTrigger value="password" className="w-[50%] pb-2 data-[state=active]:border-b-[2.5px] data-[state=active]:border-b-black dark:data-[state=active]:border-b-white border-b-gray-200 dark:border-b-[#808080] border-b-[2.5px]">Share with me</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account" className="custom-scrollbar px-4 h-[25rem] overflow-y-scroll">
                            <CollapsibleItemList itemsList={collapsibleItems} />
                        </TabsContent>
                        <TabsContent value="password">Placeholder Content</TabsContent>
                    </Tabs>
                </Sidenav.Drawer>

                {/* Dummy Entires */}

                {/* Performance Item Navigation Content */}
                <Sidenav.Drawer id="performance">
                    <div className="mb-4">
                        <h2 className="text-xl">Performance Content</h2>
                    </div>
                </Sidenav.Drawer>

                {/* Settings Item Navigation Content */}
                <Sidenav.Drawer id="settings">
                    <div className="mb-4">
                        <h2 className="text-xl">Settings Content</h2>
                    </div>
                </Sidenav.Drawer>

                <Sidenav.Drawer id="stack">
                    <div className="mb-4">
                        <h2 className="text-xl">Stack Content</h2>
                    </div>
                </Sidenav.Drawer>

                <Sidenav.Drawer id="people">
                    <div className="mb-4">
                        <h2 className="text-xl">People Content</h2>
                    </div>
                </Sidenav.Drawer>

                <Sidenav.Drawer id="downloads">
                    <div className="mb-4">
                        <h2 className="text-xl">Downloads Content</h2>
                    </div>
                </Sidenav.Drawer>

                <Sidenav.Drawer id="stats">
                    <div className="mb-4">
                        <h2 className="text-xl">Statistics Content</h2>
                    </div>
                </Sidenav.Drawer>

            </Sidenav.Drawers>
        </Sidenav>
    )
}

export default SideNavigation