import React from 'react';
import { useState } from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Michael Tuska</h1>
          <h2 className="text-xl mt-2">Enterprise Architect / System Architect / Solution Architect</h2>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
          <div className="space-y-4">
            <p>Experienced Software and Business Architect with over 40 years of expertise since 1982.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Key Competencies:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Architecture and Method</li>
                  <li>Business Modeling</li>
                  <li>Infrastructure</li>
                  <li>Development Methods</li>
                  <li>Agile Methodologies</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Core Expertise:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Domain-Driven Design</li>
                  <li>Enterprise Architecture</li>
                  <li>Solution Architecture</li>
                  <li>Technical Architecture</li>
                  <li>Documentation Excellence</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Recent Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">SKAT Udviklings- og Forenklingsstyrelsen</h3>
              <p className="text-gray-600">Enterprise, Solution & System Architect (2018 - Present)</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Enterprise Application Complexity Analysis (ECAT)</li>
                <li>System Modernization Program</li>
                <li>Ejendom og Grunde (Property Valuation System)</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;