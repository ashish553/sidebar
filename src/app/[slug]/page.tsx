export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    return <div className="w-full h-full flex justify-center items-center">
        <p className="font-thin mt-8 md:m-auto text-2xl md:text-6xl">{slug.toUpperCase()}</p>
    </div>
  }