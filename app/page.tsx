import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, MapPin, Instagram, MessageCircle, Gift, Zap, Shield, Star } from "lucide-react"

export default function EnduroRentalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-enduro.jpg')`,
            backgroundPosition: "85% center", // смещение вправо для показа мотоциклиста
          }}
        >
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 -mt-16 xs:-mt-12 sm:mt-4 md:mt-8 lg:mt-12">
              <img
                src="/motoride-logo-new.png"
                alt="MOTORIDE Logo"
                className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-48 xl:h-48 mx-auto mb-6 object-contain"
              />
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-balance text-primary font-montserrat leading-tight text-center px-2 xs:px-4 mx-auto max-w-full break-words">
  <span className="whitespace-nowrap">Прокат мотоциклов</span> <br className="block sm:hidden" />
  <span className="whitespace-nowrap">ENDURO в Караганде</span>
</h1>

            <p className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 text-balance font-medium leading-relaxed">
              Катайся от 60 минут до 4х часов!
            </p>

            <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-12 text-pretty leading-relaxed">
              С нас - мотоциклы, полная экипировка, крутая локация за горкой Каргу, с вас - только желание нажать на
              газ!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-8 sm:mb-16 md:mb-24 lg:mb-32">
              <Button
                size="lg"
                className="whatsapp-gradient hover:scale-105 transition-all duration-300 text-white text-lg px-8 py-6 border-0 w-full sm:flex-1 min-h-[56px]"
                asChild
              >
                <a href="https://wa.me/77017950435" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5 flex-shrink-0" />
                  Связаться в WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                className="instagram-gradient hover:scale-105 transition-all duration-300 text-white text-lg px-8 py-6 border-0 w-full sm:flex-1 min-h-[56px]"
                asChild
              >
                <a href="https://instagram.com/moto_ride_krg" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-5 w-5 flex-shrink-0" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <Gift className="w-12 h-12 xs:w-14 xs:h-14 [@media(min-width:375px)]:w-16 [@media(min-width:375px)]:h-16 [@media(min-width:390px)]:w-18 [@media(min-width:390px)]:h-18 [@media(min-width:428px)]:w-20 [@media(min-width:428px)]:h-20 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-primary-foreground" />
            <h2 className="text-2xl xs:text-3xl [@media(min-width:375px)]:text-3xl [@media(min-width:390px)]:text-4xl [@media(min-width:428px)]:text-4xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-montserrat leading-tight">
              Используй промокод «MOTO RIDE» и получи скидку 10%
            </h2>
            <p className="text-lg xs:text-xl [@media(min-width:375px)]:text-xl [@media(min-width:390px)]:text-2xl [@media(min-width:428px)]:text-2xl sm:text-xl md:text-xl mb-3 sm:mb-4 leading-relaxed">
              Покажи скриншот при записи или перед катанием
            </p>

            <Badge variant="destructive" className="text-sm sm:text-lg px-3 sm:px-4 py-1 sm:py-2 mb-4 sm:mb-6">
              Акция действует всего 5 дней
            </Badge>

            <div className="mt-6 sm:mt-8 max-w-xs sm:max-w-sm mx-auto">
              <Button
                size="lg"
                className="whatsapp-gradient hover:scale-105 transition-all duration-300 text-white w-full sm:flex-1 py-4 px-4 sm:px-6 min-h-[56px] text-sm sm:text-base"
                asChild
              >
                <a href="https://wa.me/77017950435" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5 flex-shrink-0" />
                  Связаться в WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl xs:text-4xl [@media(min-width:375px)]:text-4xl [@media(min-width:390px)]:text-5xl [@media(min-width:428px)]:text-5xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 font-montserrat">
            Что мы предлагаем
          </h2>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6 sm:p-8">
                <Clock className="w-10 h-10 xs:w-12 xs:h-12 [@media(min-width:375px)]:w-12 [@media(min-width:375px)]:h-12 [@media(min-width:390px)]:w-14 [@media(min-width:390px)]:h-14 [@media(min-width:428px)]:w-16 [@media(min-width:428px)]:h-16 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-primary" />
                <h3 className="text-xl xs:text-2xl [@media(min-width:375px)]:text-2xl [@media(min-width:390px)]:text-3xl [@media(min-width:428px)]:text-3xl sm:text-xl font-bold mb-3 sm:mb-4">
                  Гибкое время
                </h3>
                <p className="text-base xs:text-lg [@media(min-width:375px)]:text-lg [@media(min-width:390px)]:text-xl [@media(min-width:428px)]:text-xl sm:text-base text-muted-foreground leading-relaxed">
                  Катайся от 60 минут до 4х часов - выбирай удобное для тебя время
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 sm:p-8">
                <Shield className="w-10 h-10 xs:w-12 xs:h-12 [@media(min-width:375px)]:w-12 [@media(min-width:375px)]:h-12 [@media(min-width:390px)]:w-14 [@media(min-width:390px)]:h-14 [@media(min-width:428px)]:w-16 [@media(min-width:428px)]:h-16 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-primary" />
                <h3 className="text-xl xs:text-2xl [@media(min-width:375px)]:text-2xl [@media(min-width:390px)]:text-3xl [@media(min-width:428px)]:text-3xl sm:text-xl font-bold mb-3 sm:mb-4">
                  Полная экипировка
                </h3>
                <p className="text-base xs:text-lg [@media(min-width:375px)]:text-lg [@media(min-width:390px)]:text-xl [@media(min-width:428px)]:text-xl sm:text-base text-muted-foreground leading-relaxed">
                  Шлем, защита, перчатки - всё включено в стоимость проката
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 sm:p-8">
                <MapPin className="w-10 h-10 xs:w-12 xs:h-12 [@media(min-width:375px)]:w-12 [@media(min-width:375px)]:h-12 [@media(min-width:390px)]:w-14 [@media(min-width:390px)]:h-14 [@media(min-width:428px)]:w-16 [@media(min-width:428px)]:h-16 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-primary" />
                <h3 className="text-xl xs:text-2xl [@media(min-width:375px)]:text-2xl [@media(min-width:390px)]:text-3xl [@media(min-width:428px)]:text-3xl sm:text-xl font-bold mb-3 sm:mb-4">
                  Крутая локация
                </h3>
                <p className="text-base xs:text-lg [@media(min-width:375px)]:text-lg [@media(min-width:390px)]:text-xl [@media(min-width:428px)]:text-xl sm:text-base text-muted-foreground leading-relaxed">
                  Трассы за горкой Каргу - идеальное место для эндуро
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Zap className="w-12 h-12 xs:w-14 xs:h-14 [@media(min-width:375px)]:w-16 [@media(min-width:375px)]:h-16 [@media(min-width:390px)]:w-18 [@media(min-width:390px)]:h-18 [@media(min-width:428px)]:w-20 [@media(min-width:428px)]:h-20 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-accent" />
            <h2 className="text-3xl xs:text-4xl [@media(min-width:375px)]:text-4xl [@media(min-width:390px)]:text-5xl [@media(min-width:428px)]:text-5xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-montserrat">
              Нет опыта? Не проблема!
            </h2>
            <p className="text-xl xs:text-2xl [@media(min-width:375px)]:text-2xl [@media(min-width:390px)]:text-3xl [@media(min-width:428px)]:text-3xl sm:text-xl mb-6 sm:mb-8 text-muted-foreground">
              Научим бесплатно при бронировании от двух часов
            </p>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mt-8 sm:mt-12">
              <Card>
                <CardContent className="p-5 sm:p-6">
                  <h3 className="text-xl xs:text-2xl [@media(min-width:375px)]:text-2xl [@media(min-width:390px)]:text-3xl [@media(min-width:428px)]:text-3xl sm:text-xl font-bold mb-3 sm:mb-4">
                    Требования к прокату:
                  </h3>
                  <ul className="text-left space-y-2 sm:space-y-3">
                    <li className="flex items-center gap-2 sm:gap-3 text-base xs:text-lg sm:text-base">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      Возраст желателен 16+
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3 text-base xs:text-lg sm:text-base">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      Рост от 165см
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3 text-base xs:text-lg sm:text-base">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      Умение кататься на велосипеде
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-accent text-accent-foreground">
                <CardContent className="p-5 sm:p-6">
                  <h3 className="text-xl xs:text-2xl [@media(min-width:375px)]:text-2xl [@media(min-width:390px)]:text-3xl [@media(min-width:428px)]:text-3xl sm:text-xl font-bold mb-3 sm:mb-4">
                    Бесплатное обучение!
                  </h3>
                  <p className="mb-3 sm:mb-4 text-base xs:text-lg sm:text-base leading-relaxed">
                    При бронировании от 2х часов мы научим тебя основам управления мотоциклом
                  </p>
                  <Badge variant="secondary" className="bg-white text-accent text-sm xs:text-base sm:text-sm">
                    Включено в стоимость
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl xs:text-4xl [@media(min-width:375px)]:text-4xl [@media(min-width:390px)]:text-5xl [@media(min-width:428px)]:text-5xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-montserrat">
            Записывайся заранее!
          </h2>
          <p className="text-lg xs:text-xl [@media(min-width:375px)]:text-xl [@media(min-width:390px)]:text-2xl [@media(min-width:428px)]:text-2xl sm:text-xl md:text-xl mb-6 sm:mb-8 leading-relaxed">
            Количество мест ограничено. Пиши в директ/WhatsApp
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-sm sm:max-w-2xl mx-auto mt-8 sm:mt-16 md:mt-24 lg:mt-32 mb-8 sm:mb-16 md:mb-24 lg:mb-32">
            <Button
              size="lg"
              className="whatsapp-gradient hover:scale-105 transition-all duration-300 text-white w-full sm:flex-1 py-4 px-4 sm:px-6 min-h-[56px] text-sm sm:text-base"
              asChild
            >
              <a href="https://wa.me/77017950435" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5 flex-shrink-0" />
                8(701)795-04-35
              </a>
            </Button>
            <Button
              size="lg"
              className="instagram-gradient hover:scale-105 transition-all duration-300 text-white w-full sm:flex-1 py-4 px-4 sm:px-6 min-h-[56px] text-sm sm:text-base"
              asChild
            >
              <a href="https://instagram.com/moto_ride_krg" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5 flex-shrink-0" />
                @moto_ride_krg
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="mb-3 sm:mb-4">
            <img
              src="/motoride-logo-new.png"
              alt="MOTORIDE Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 object-contain"
            />
          </div>

          <h3 className="text-lg xs:text-xl sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">MOTO RIDE Караганда</h3>
          <p className="text-sm xs:text-base sm:text-sm opacity-80 mb-3 sm:mb-4 leading-relaxed">
            Прокат мотоциклов Эндуро • Полная экипировка • Обучение
          </p>
          <div className="flex justify-center gap-4 sm:gap-6">
            <a
              href="https://wa.me/77017950435"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors p-2"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://instagram.com/moto_ride_krg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors p-2"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
