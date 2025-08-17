import React from "react";

const page = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900 py-8 px-4 flex flex-col items-center justify-center">
      {/* Animated stone texture background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(120,113,108,0.3)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(168,162,158,0.2)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Floating stone particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-stone-400 rounded-full opacity-20 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px]">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-stone-100 drop-shadow-lg">
          Les services de WASSALI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Card 1 */}
          <div
            className="group bg-gradient-to-br from-stone-100 to-stone-200 backdrop-blur-lg rounded-2xl shadow-2xl border border-stone-300 overflow-hidden hover:scale-105 transform transition-all duration-500 hover:shadow-3xl"
            style={{
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            }}
          >
            <div className="h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
            <div className="p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-stone-800 group-hover:text-stone-900 transition-colors duration-300">
                Service déménagement
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed group-hover:text-stone-700 transition-colors duration-300">
                Wassali offre une solution de déménagement, professionnel,
                flexible, Wassali vous permet de choisir entre plusieurs
                transporteurs. Le client choisit les services dont il a besoin :
                le démontage, l'emballement, le déménagement, le remontage et
                l'aménagement.
              </p>
            </div>
            {/* Subtle hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-red-400 to-red-600 transition-opacity duration-500 pointer-events-none"></div>
          </div>

          {/* Card 2 */}
          <div
            className="group bg-gradient-to-br from-stone-100 to-stone-200 backdrop-blur-lg rounded-2xl shadow-2xl border border-stone-300 overflow-hidden hover:scale-105 transform transition-all duration-500 hover:shadow-3xl"
            style={{
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            }}
          >
            <div className="h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
            <div className="p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-stone-800 group-hover:text-stone-900 transition-colors duration-300">
                Service transport de marchandise
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed group-hover:text-stone-700 transition-colors duration-300">
                Que vous soyez un particulier ou un professionnel, Wassali vous
                permet d'expédier tout type de marchandise confondus en toute
                sécurité, grâce à son portefeuille de transporteurs qualifiés.
                Réduisez le coût de votre transport avec des tarifs compétitifs,
                grâce à l'optimisation de nos véhicules en retour à vide.
              </p>
            </div>
            {/* Subtle hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-red-400 to-red-600 transition-opacity duration-500 pointer-events-none"></div>
          </div>

          {/* Card 3 */}
          <div
            className="group bg-gradient-to-br from-stone-100 to-stone-200 backdrop-blur-lg rounded-2xl shadow-2xl border border-stone-300 overflow-hidden hover:scale-105 transform transition-all duration-500 hover:shadow-3xl"
            style={{
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            }}
          >
            <div className="h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
            <div className="p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-stone-800 group-hover:text-stone-900 transition-colors duration-300">
                Service coursier
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed group-hover:text-stone-700 transition-colors duration-300">
                Vous avez oublié un objet chez vous ? Vous n'avez pas le temps
                de faire la queue pour payer une facture ? Wassali met à votre
                disposition un service coursier qui va vous permettre de
                remédier à ces problèmes à travers un coursier qui va faire ses
                petites courses à votre place.
              </p>
            </div>
            {/* Subtle hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-red-400 to-red-600 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
