import React, { useEffect, useState } from 'react';
import { Heart, Calendar, MapPin, Clock, Music, Gift, Shirt, Menu, X } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100 text-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Heart className="w-6 h-6 text-rose-500" />
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('story')} className="text-gray-700 hover:text-rose-500 transition-colors">История</button>
              <button onClick={() => scrollToSection('schedule')} className="text-gray-700 hover:text-rose-500 transition-colors">Расписание</button>
              <button onClick={() => scrollToSection('dress-code')} className="text-gray-700 hover:text-rose-500 transition-colors">Дресс-код</button>
              <button onClick={() => scrollToSection('gifts')} className="text-gray-700 hover:text-rose-500 transition-colors">Подарки</button>
              <button onClick={() => scrollToSection('rsvp')} className="text-gray-700 hover:text-rose-500 transition-colors">RSVP</button>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('story')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-rose-50 rounded-md"
              >
                История
              </button>
              <button 
                onClick={() => scrollToSection('schedule')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-rose-50 rounded-md"
              >
                Расписание
              </button>
              <button 
                onClick={() => scrollToSection('dress-code')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-rose-50 rounded-md"
              >
                Дресс-код
              </button>
              <button 
                onClick={() => scrollToSection('gifts')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-rose-50 rounded-md"
              >
                Подарки
              </button>
              <button 
                onClick={() => scrollToSection('rsvp')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-rose-50 rounded-md"
              >
                RSVP
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070')] 
          bg-cover bg-center opacity-20"
        />
        <div className={`text-center space-y-6 p-8 transform transition-all duration-1000 
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <Heart className="w-12 h-12 mx-auto text-rose-500 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-serif text-rose-900">Анна & Михаил</h1>
          <p className="text-xl md:text-2xl font-light">приглашают вас разделить с ними особенный день</p>
          <div className="text-3xl font-serif text-rose-700">15 августа 2024</div>
        </div>
      </div>

      {/* Story Section */}
      <section id="story" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-serif text-rose-800">Наша История</h2>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <img 
                    src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1170" 
                    alt="Пара" 
                    className="rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center">
                  <p className="text-lg leading-relaxed">
                    Наша история началась со случайной встречи в кафе. 
                    Два года спустя мы готовы начать наш совместный путь.
                    Приглашаем вас разделить с нами этот особенный момент.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-rose-800 text-center mb-12">План Мероприятия</h2>
          <div className="space-y-8">
            <div className="flex items-center space-x-6 p-6 bg-rose-50 rounded-lg transform transition-all duration-300 hover:scale-102">
              <Clock className="w-12 h-12 text-rose-500 animate-float" />
              <div>
                <h3 className="text-xl font-semibold">14:00 - Церемония</h3>
                <p>Торжественная церемония бракосочетания</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 p-6 bg-rose-50 rounded-lg transform transition-all duration-300 hover:scale-102">
              <Clock className="w-12 h-12 text-rose-500 animate-float" />
              <div>
                <h3 className="text-xl font-semibold">15:00 - Фотосессия</h3>
                <p>Праздничная фотосессия с гостями</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 p-6 bg-rose-50 rounded-lg transform transition-all duration-300 hover:scale-102">
              <Clock className="w-12 h-12 text-rose-500 animate-float" />
              <div>
                <h3 className="text-xl font-semibold">17:00 - Праздничный ужин</h3>
                <p>Банкет, развлекательная программа и танцы</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section id="dress-code" className="py-20 bg-rose-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-rose-800 text-center mb-12">Дресс-код</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <Shirt className="w-12 h-12 mx-auto text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-center">Для дам</h3>
              <p className="text-center mb-6">Коктейльные или вечерние платья в пастельных тонах</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000"
                    alt="Пример платья 1"
                    className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000"
                    alt="Пример платья 2"
                    className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <Shirt className="w-12 h-12 mx-auto text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-center">Для господ</h3>
              <p className="text-center mb-6">Классический костюм светлых оттенков</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1000"
                    alt="Пример костюма 1"
                    className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="group overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000"
                    alt="Пример костюма 2"
                    className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gifts Section */}
      <section id="gifts" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-rose-800 text-center mb-12">Подарки</h2>
          <div className="bg-rose-50 p-8 rounded-xl shadow-lg">
            <Gift className="w-12 h-12 mx-auto text-rose-500 mb-6 animate-float" />
            <p className="text-center text-lg mb-6">
              Ваше присутствие на нашей свадьбе - самый главный подарок для нас.
              Если вы хотите порадовать нас чем-то особенным, мы будем благодарны за вклад в наше свадебное путешествие.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow transform transition-all duration-300 hover:scale-102">
                <h3 className="text-xl font-semibold mb-4">Пожелания:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Вклад в медовый месяц</li>
                  <li>Сертификаты в магазины</li>
                  <li>Предметы для дома</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow transform transition-all duration-300 hover:scale-102">
                <h3 className="text-xl font-semibold mb-4">Банковские реквизиты:</h3>
                <p>По запросу мы с радостью поделимся реквизитами для денежного подарка</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-rose-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-rose-800 text-center mb-12">Подтвердите присутствие</h2>
          <form className="max-w-md mx-auto space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ваше имя</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-rose-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all duration-300"
                placeholder="Иван Иванов"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-rose-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all duration-300"
                placeholder="ivan@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Количество гостей</label>
              <select
                id="guests"
                className="w-full px-4 py-2 rounded-lg border border-rose-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all duration-300"
              >
                <option value="1">1 гость</option>
                <option value="2">2 гостя</option>
                <option value="3">3 гостя</option>
                <option value="4">4 гостя</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Сообщение или пожелания</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-rose-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all duration-300"
                placeholder="Ваше сообщение..."
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Подтвердить присутствие
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-900 text-rose-100 py-8 text-center">
        <Music className="w-8 h-8 mx-auto text-rose-300 animate-spin-slow mb-4" />
        <p className="animate-pulse">#АннаИМихаил2024</p>
      </footer>
    </div>
  );
}

export default App;