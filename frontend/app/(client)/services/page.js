import React from "react";

const page = () => {
  return (
    <div className="bg-white py-8 px-4 sm:h-[700px]  h:[700px] flex flex-col items-center justify-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
        Les services de WASSALI
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px]">
        {/* Card 1 */}
        <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-red-500 lg:w-[400px]">
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Service déménagement
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Wassali offre une solution de déménagement, professionnel,
              flexible, Wassali vous permet de choisir entre plusieurs
              transporteurs. Le client choisit les services dont il a besoin :
              le démontage, l’emballement, le déménagement, le remontage et
              l’aménagement.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-red-500 lg:w-[400px]">
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Service transport de marchandise
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Que vous soyez un particulier ou un professionnel, Wassali vous
              permet d’expédier tout type de marchandise confondus en toute
              sécurité, grâce à son portefeuille de transporteurs qualifiés.
              Réduisez le coût de votre transport avec des tarifs compétitifs,
              grâce à l'optimisation de nos véhicules en retour à vide.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-red-500 lg:w-[400px]">
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Service coursier
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Vous avez oublié un objet chez vous ? Vous n’avez pas le temps de
              faire la queue pour payer une facture ? Wassali met à votre
              disposition un service coursier qui va vous permettre de remédier
              à ces problèmes à travers un coursier qui va faire ses petites
              courses à votre place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
