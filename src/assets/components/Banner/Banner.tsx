export const Banner = ()=>{
  return (
    <section className="relative h-[330px] sm:h-[400px] margin-responsive">
      <figure className="h-full">
        <img className="w-full h-full object-cover" width="1920" height="760" src="/images/banners/banner_promocion.webp" alt="Banner de promoción" />
      </figure>

      <button className="btn-banner">Conseguir cupón</button>
    </section>
  )
}