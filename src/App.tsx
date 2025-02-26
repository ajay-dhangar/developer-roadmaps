import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { categories } from './data/roadmaps';
import { CategoryCard } from './components/CategoryCard';
import { RoadmapContent } from './components/RoadmapContent';
import { Category, RoadmapItem } from './types';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedRoadmap, setSelectedRoadmap] = useState<RoadmapItem | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Developer Roadmaps</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">Guides</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Videos</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Resources</a>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-[300px,1fr] gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Role Based</h2>
              <p className="text-sm text-gray-600 mb-6">
                Step by step guides and paths to learn different tools or technologies
              </p>
              <div className="space-y-4">
                {categories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    isActive={selectedCategory?.id === category.id}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSelectedRoadmap(category.roadmaps[0]);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="bg-white rounded-xl p-8 shadow-sm min-h-[calc(100vh-12rem)]">
            {selectedRoadmap ? (
              <RoadmapContent category={selectedCategory} />
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center max-w-md">
                  <GraduationCap className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Choose Your Learning Path
                  </h3>
                  <p className="text-gray-600">
                    Select a category from the sidebar to explore detailed, step-by-step learning paths designed to help you master your chosen technology.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;