This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

API Reference for SideNav component

1. Sidenav

The main container for the sidebar navigation.

```
<Sidenav>
  {children}
</Sidenav>
```

2. Sidenav.Items

Wraps all navigation items.

```
<Sidenav.Items>
  <Sidenav.Item id="home" icon={HomeIcon} />
</Sidenav.Items>
```

3. Sidenav.Item

Defines an individual navigation item.

a. id (string) - Unique identifier for the navigation item.
b. icon (React.ComponentType) - The icon component.

```
<Sidenav.Item id="settings" icon={SettingsIcon} />
```

4. Sidenav.Drawers

Wraps all drawer components.

```
<Sidenav.Drawers>
  <Sidenav.Drawer id="home">Content</Sidenav.Drawer>
</Sidenav.Drawers>
```

5. Sidenav.Drawer

Defines the content displayed when a navigation item is selected.

Props:

a. id (string) - Must match a Sidenav.Item ID.

```
<Sidenav.Drawer id="home">
  <h2>Home Content</h2>
</Sidenav.Drawer>
```


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```