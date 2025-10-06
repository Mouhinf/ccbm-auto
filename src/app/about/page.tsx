import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Factory, Globe, Smartphone, Target } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-12">
        <div className="text-center">
          <h1 className="font-headline text-4xl md:text-5xl text-primary tracking-wider">
            À Propos de EMG Universal Auto
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            Votre partenaire de confiance pour l'automobile au Sénégal et en Afrique de l'Ouest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                <Building className="text-primary" />
                Notre Histoire
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg space-y-4 text-foreground/80">
              <p>
                Fondée dans les années 1990 par M. Mbaye Guèye, EMG Universal Auto a commencé par distribuer des pièces d'origine pour véhicules allemands. Rapidement, nous sommes devenus un concessionnaire multimarques indépendant, engagé à fournir des véhicules de qualité adaptés aux réalités locales.
              </p>
              <p>
                Notre parcours est marqué par une croissance constante, alimentée par la confiance de nos clients et notre dévouement à l'excellence.
              </p>
            </CardContent>
          </Card>
           <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
              <Image
                src="/entree-emg.jpg"
                alt="Usine de montage EMG"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                data-ai-hint="car assembly factory"
              />
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                    <Target className="text-primary" />
                    Notre Mission
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-lg text-foreground/80">
                    <p>
                    Rendre accessible des véhicules fiables et économiques pour tous les Sénégalais, tout en offrant un service client exceptionnel et des solutions de mobilité innovantes.
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                    <Globe className="text-primary" />
                    Notre Vision
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-lg text-foreground/80">
                    <p>
                    Devenir un acteur clé de l'industrialisation en développant la production automobile locale et positionner le Sénégal comme un hub automobile en Afrique de l'Ouest.
                    </p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                    <Factory className="text-primary" />
                    Engagement Industriel
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-lg text-foreground/80">
                    <p>
                    Avec la relance de l'usine de montage Seniran à Thiès, nous produisons localement pour le marché ouest-africain, créant des emplois et favorisant le transfert de compétences.
                    </p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                    <Smartphone className="text-primary" />
                    Notre Plateforme Digitale
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-lg text-foreground/80">
                    <p>
                    Pour simplifier votre expérience d'achat et de location, EMG a lancé cette application. Elle vous permet d'explorer notre catalogue, de comparer les véhicules et de nous contacter, rendant la mobilité plus accessible et transparente.
                    </p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
