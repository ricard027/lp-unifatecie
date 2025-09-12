export default function VideoSection() {
  return (
    <section className="container m-auto px-6">
      <div className="max-w-6xl mx-auto mt-20">
        <iframe
          src="https://www.youtube.com/embed/uZScbyGXUqI?autoplay=1&mute=1&loop=1&playlist=uZScbyGXUqI"
          className="w-full sm:h-[600px] h-[300px] rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
        />
      </div>
      <div className="max-w-6xl mx-auto mt-10 sm:mt-20">
        <p className="text-lg sm:text-2xl font-bold text-center">
          Formação online e gratuita para jovens de 15 a 29 anos. Do zero ao pro
          player: cursos rápidos com certificados digitais e acesso ao mercado
          gamer
        </p>
      </div>
    </section>
  );
}
