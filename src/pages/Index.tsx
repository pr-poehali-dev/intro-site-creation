import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-cyan-500/10 to-green-500/10 animate-pulse"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge
              variant="outline"
              className="mb-4 text-sm font-medium px-4 py-2 bg-white/80 backdrop-blur-sm"
            >
              🤖 Bot Developer
            </Badge>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-red-500 bg-clip-text text-transparent">
            Создаю ботов, которые работают
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Разрабатываю телеграм-ботов и автоматизирую процессы. Превращаю идеи
            в код, а код — в решения.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3"
              onClick={() =>
                window.open("https://t.me/your_username", "_blank")
              }
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать мне
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Icon name="Download" size={20} className="mr-2" />
              Портфолио
            </Button>
          </div>
        </div>
      </section>

      {/* Who I Am Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Кто я</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-cyan-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl border border-red-200">
                <Icon name="Code" size={32} className="text-red-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-slate-800">
                  Разработчик
                </h3>
                <p className="text-slate-600">
                  Создаю ботов на Python, Node.js и других технологиях. Каждый
                  бот — это уникальное решение под конкретную задачу.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl border border-cyan-200">
                <Icon name="Zap" size={32} className="text-cyan-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-slate-800">
                  Автоматизатор
                </h3>
                <p className="text-slate-600">
                  Люблю превращать рутинные процессы в автоматические. Если это
                  можно автоматизировать — я это сделаю.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl">
                <img
                  src="/img/394b616d-ac13-4445-a297-320a8416e949.jpg"
                  alt="Bot Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-500 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">
              Что делаю
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-red-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Bot" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-slate-800">
                  Telegram боты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-center">
                  Создаю ботов для автоматизации бизнес-процессов, обработки
                  заявок и взаимодействия с клиентами.
                </CardDescription>
                <div className="mt-4 text-center">
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    API
                  </Badge>
                  <Badge variant="secondary" className="mb-2">
                    Webhook
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-cyan-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Workflow" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-slate-800">
                  Интеграции
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-center">
                  Подключаю ботов к CRM, базам данных, платежным системам и
                  другим сервисам.
                </CardDescription>
                <div className="mt-4 text-center">
                  <Badge variant="secondary" className="mr-2 mb-2">
                    REST API
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    CRM
                  </Badge>
                  <Badge variant="secondary" className="mb-2">
                    Payments
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-green-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Settings" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-slate-800">
                  Автоматизация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-center">
                  Создаю системы для автоматической обработки данных,
                  уведомлений и бизнес-логики.
                </CardDescription>
                <div className="mt-4 text-center">
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Scripts
                  </Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">
                    Cron
                  </Badge>
                  <Badge variant="secondary" className="mb-2">
                    Monitoring
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Как связаться</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-cyan-500 mx-auto mb-8"></div>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Готов создать бота, который будет передавать сообщения от других
            пользователей? Давайте обсудим ваш проект!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div
                className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform"
                onClick={() =>
                  window.open("https://t.me/your_username", "_blank")
                }
              >
                <Icon name="MessageCircle" size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Telegram</h3>
              <a
                href="https://t.me/your_username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                @your_username
              </a>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform"
                onClick={() => window.open("mailto:your@email.com", "_blank")}
              >
                <Icon name="Mail" size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a
                href="mailto:your@email.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                your@email.com
              </a>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform"
                onClick={() =>
                  window.open("https://github.com/yourname", "_blank")
                }
              >
                <Icon name="Github" size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <a
                href="https://github.com/yourname"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                github.com/yourname
              </a>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-red-500 to-cyan-500 hover:from-red-600 hover:to-cyan-600 text-white px-12 py-4 text-lg"
            onClick={() => window.open("https://t.me/your_username", "_blank")}
          >
            <Icon name="Send" size={24} className="mr-3" />
            Начать проект
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
