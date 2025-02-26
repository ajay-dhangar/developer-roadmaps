import React from "react";
import { Category } from "../types";

import { CheckCircle2, ArrowRight } from "lucide-react";

interface RoadmapContentProps {
  category: Category;
}

export const RoadmapContent: React.FC<RoadmapContentProps> = ({ category }) => {
  return (
    <div className="space-y-8">
      {category.roadmaps.map((r) => (
        <div key={r.id} className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">{r.title}</h2>
          <p className="text-gray-600">{r.description}</p>
          <div className="space-y-4">
            {r.subtopics.map((subtopic, index) => (
              <div key={index} className="space-y-2">
                <div className="border-b pb-6">
                  <div key={index} className="relative">
                    {index < subtopic.content.length - 1 && (
                      <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-blue-200" />
                    )}

                    <div className="relative z-10">
                      {/* Section Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-700">
                            {subtopic.title}
                          </h3>
                          <p className="text-gray-600 mt-1">
                            {subtopic.description}
                          </p>
                        </div>
                      </div>

                      {/* Content Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-16">
                        {subtopic.content.map((item, i) => (
                          <div
                            key={i}
                            className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group"
                          >
                            <div className="flex items-start gap-3">
                              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors mt-0.5" />
                              <p className="text-gray-800 font-medium">
                                {item}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
