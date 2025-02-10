export const SectionHeader = ({
  title,
  eyebrow,
  description,

}: {
  title?: string;
  eyebrow?: string;
  description?: string;
}) => {
  return (
    <>
    <div className="flex justify-center">
        <p className="uppercase font-bold tracking-widest bg-gradient-to-r from-amber-300 to-orange-500 text-center bg-clip-text text-transparent">{eyebrow}
        </p>
        </div>
        <h2 className="font-lora text-3xl md:text-5xl text-center mt-6 bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">{title}</h2>
        <p className=" font-roboto text-center md:text-lg l:text-xl text-white/60 mt-4 max-w-md mx-auto">{description}</p>
    </>

  )
}