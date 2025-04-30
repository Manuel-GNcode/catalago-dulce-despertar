export const Header = ()=>{
  return (
    <header className="flex flex-col items-center gap-4 py-4 sm:flex-row sm:justify-between sm:items-end margin-responsive">
      <figure className="w-60">
        <img width="451" height="204" src="logo.webp" alt="Logo de la empresa Dulce despertar" />
      </figure>

      <div className="flex gap-2 relative sm:mb-2 sm:pb-2">
        <a aria-label="Ir a Instagram" href="#" target="_BLANK">
          <span className='icon-header bg-[url(/images/icons/instagram.webp)] hover:bg-[url(/images/icons/instagram_active.webp)]'></span>
        </a>
        <a aria-label="Ir a Youtube" href="https://www.youtube.com/@gankandgit" target="_BLANk">
          <span className="icon-header bg-[url(/images/icons/youtube.webp)] hover:bg-[url(/images/icons/youtube_active.webp)]"></span>
        </a>
        <a aria-label="Ir a Pinterest" href="#" target="_BLANK">
          <span className="icon-header bg-[url(/images/icons/pinterest.webp)] hover:bg-[url(/images/icons/pinterest_active.webp)]"></span>
        </a>
        <span className="absolute w-[130%] h-2 bg-soft-blue-green bottom-1/2 right-1/2 translate-1/2 -z-1 rounded-md sm:right-0 sm:bottom-0 sm:translate-x-0 sm:translate-y-full sm:w-[180%]"></span>
      </div>
    </header>
  )
}