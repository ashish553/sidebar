import { Undo2, Menu, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useContext, useState, createContext } from 'react';

const navItemCtx = createContext<{ currentItem: string | undefined, setCurrentItem: React.Dispatch<React.SetStateAction<string | undefined>> } | undefined>(undefined);

function Sidenav({ children }: { children: React.ReactNode }) {
  const [currentItem, setCurrentItem] = useState<string | undefined>(undefined)
  const [mobileNavVisible, setmobileNavVisible] = useState(false)
  return (
    <navItemCtx.Provider value={{ currentItem, setCurrentItem }}>

      <div className={`p-4 bg-white dark:bg-[#0e0e0e] flex justify-center md:hidden ${mobileNavVisible && 'hidden'}`}>
        <Menu onClick={() => { setmobileNavVisible(true) }} />
      </div>
      <div className={`md:flex w-full md:w-auto absolute md:relative ${!mobileNavVisible && 'hidden'}`}>
        <div className='p-4 bg-white dark:bg-[#0e0e0e] flex justify-center md:hidden'>
          <Undo2 onClick={() => { setmobileNavVisible(false) }} />
        </div>
        {children}
      </div>
    </navItemCtx.Provider>
  )
}

interface ItemProps {
  id: string;
  icon: React.ComponentType;
}

function Item({ id, icon: Icon }: ItemProps) {

  const context = useContext(navItemCtx);
  if (!context) {
    throw new Error('navItemCtx must be used within a NavItemProvider');
  }
  const { currentItem, setCurrentItem } = context;

  return <div className={`p-2 mx-4 my-2 hover:bg-[grey] rounded ${id === currentItem && 'bg-[grey]'}`}>
    <a href="#" onClick={() => {
      return id === currentItem ? setCurrentItem('') : setCurrentItem(id)
    }}>
      <Icon />
    </a>
  </div>;
}

function Items({ children }: { children: React.ReactNode }) {
  const { setTheme, theme } = useTheme()
  return (
    <section className="flex flex-col bg-white dark:bg-[#0e0e0e] border-r-2 border-r-gray-200 dark:border-r-gray-800">
      <div
        className={`bg-white dark:bg-[#0e0e0e] min-h-screen flex flex-col justify-between md:justify-center items-center md:block`}
      >
        <div className={`p-2 mx-4 my-2 hover:bg-[grey] rounded`}>
          <Sun color='orange' onClick={()=>{
            if(theme==='light') {
              setTheme('dark')
            } else {
              setTheme('light')
            }
          }}/>
        </div>
        {children}
      </div>
    </section>
  )
}

function Drawer({ id, children }: { id: string, children: React.ReactNode }) {

  const context = useContext(navItemCtx);
  if (!context) {
    throw new Error('navItemCtx must be used within a NavItemProvider');
  }
  const { currentItem, setCurrentItem } = context;

  return (
    <>
      {id.toLowerCase() === currentItem?.toLowerCase() && <div className={`p-4 absolute top-0 left-0 w-full md:w-[20rem] md:top-auto md:left-[4.6rem] bg-white dark:bg-[#0e0e0e] min-h-screen h-auto z-10 h-full md:h-auto border-r-2 border-r-gray-200 dark:border-r-gray-800`}>
        <div className="flex justify-center">
          <Undo2 className='block md:hidden' onClick={() => {
            setCurrentItem('')
          }} />

        </div>
        {children}
      </div>}

    </>
  )
}

function Drawers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}

Sidenav.Items = Items
Sidenav.Item = Item
Sidenav.Drawers = Drawers
Sidenav.Drawer = Drawer

export default Sidenav
export { navItemCtx }