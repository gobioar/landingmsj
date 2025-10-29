"use client"

import { Building2, ShoppingCart, ArrowRight, Package, Users, Container, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  const WA_MAYORISTA = "https://wa.me/5491128781523?text=Hola%20GoBio%20%F0%9F%8C%B1%20Soy%20comprador%20mayorista.%20Necesito%20asesoramiento%20y%20lista%20de%20precios.";
  const WA_MINORISTA = "https://wa.me/5491127738283?text=Hola%20GoBio%20%F0%9F%8C%B1%20Quiero%20comprar%20por%20su%20tienda%20online%20y%20necesito%20ayuda.";

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 px-4 pt-4 pb-12 sm:pt-6 sm:pb-20">
        <div className="max-w-6xl w-full mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32">
                <Image src="/logo1.png" alt="Gobio Logo" fill className="object-contain" priority />
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                ¿Listo para marcar{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  la diferencia?
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
                Descubrí nuestra gama de soluciones sostenibles.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Container className="w-4 h-4" />
                  Ecorígidos
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                  <ShoppingBag className="w-4 h-4" />
                  Ecoflexibles
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {/* Mayorista */}
            <Card className="relative overflow-hidden border-2 hover:border-primary transition-all hover:shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
              <CardHeader className="space-y-4 pb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl">Soluciones B2B</CardTitle>
                <CardDescription>Para empresas y compradores mayoristas.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3"><Package className="w-5 h-5 text-primary mt-0.5" />Compras en grandes volúmenes.</li>
                  <li className="flex items-start gap-3"><Users className="w-5 h-5 text-primary mt-0.5" />Precios especiales para empresas.</li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-primary mt-0.5" />Atención personalizada y soporte dedicado (IA 24/7).</li>
                </ul>

                <div className="relative w-full h-48 rounded-lg overflow-hidden bg-muted/30 border border-border">
                  <Image src="/foto.jpg" alt="Soluciones B2B" fill className="object-cover" />
                </div>

                <Button
                  size="lg"
                  className="w-full text-base h-12 gap-2"
                  onClick={() => window.open(WA_MAYORISTA, "_blank", "noopener,noreferrer")}
                >
                  Hablar con Soporte Mayorista
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <p className="text-xs text-center text-muted-foreground pt-2">
                  Respuesta inmediata por WhatsApp 24/7.
                </p>
              </CardContent>
            </Card>

            {/* Minorista */}
            <Card className="relative overflow-hidden border-2 hover:border-primary transition-all hover:shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
              <CardHeader className="space-y-4 pb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShoppingCart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl">Tienda Online</CardTitle>
                <CardDescription>Para clientes individuales y compras rápidas.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3"><Package className="w-5 h-5 text-primary mt-0.5" />Compras unitarias o pequeñas cantidades.</li>
                  <li className="flex items-start gap-3"><ShoppingCart className="w-5 h-5 text-primary mt-0.5" />Envío directo a tu domicilio.</li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-primary mt-0.5" />Catálogo completo de productos.</li>
                </ul>

                <div className="relative w-full h-48 rounded-lg overflow-hidden bg-muted/30 border border-border">
                  <Image src="/foto1.jpg" alt="Tienda Online" fill className="object-cover" />
                </div>

                <Button
                  size="lg"
                  className="w-full text-base h-12 gap-2"
                  onClick={() => window.open(WA_MINORISTA, "_blank", "noopener,noreferrer")}
                >
                  Hablar con Soporte Minorista
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <p className="text-xs text-center text-muted-foreground pt-2">
                  Respuesta inmediata por WhatsApp 24/7.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              ¿No estás seguro cuál elegir? Contactá a nuestro equipo: respondemos en segundos por WhatsApp.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-10 flex-wrap text-center sm:text-left">
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image src="/logo1.png" alt="GoBio Logo" fill className="object-contain" />
            </div>
            <a href="mailto:hola@gobio.ar" className="text-base text-primary hover:underline font-medium">
              hola@gobio.ar
            </a>
            <p className="text-base text-muted-foreground">
              © {new Date().getFullYear()} GoBio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
