import { useState, useEffect, useMemo } from 'react';
import servicesData from '../data/services.json';

interface Service {
  id: string;
  name: string;
  description: string;
  cost: string;
  processingTime: string;
}

interface Department {
  id: string;
  name: string;
  services: Service[];
}

interface Ministry {
  id: string;
  name: string;
  departments: Department[];
}

interface SearchResult extends Service {
  ministryId: string;
  ministryName: string;
  departmentName: string;
}

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 150);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Flatten all services for searching
  const allServices = useMemo(() => {
    const services: SearchResult[] = [];
    servicesData.ministries.forEach((ministry: Ministry) => {
      ministry.departments.forEach((department: Department) => {
        department.services.forEach((service: Service) => {
          services.push({
            ...service,
            ministryId: ministry.id,
            ministryName: ministry.name,
            departmentName: department.name,
          });
        });
      });
    });
    return services;
  }, []);

  // Search through all services
  const searchResults = useMemo(() => {
    if (!debouncedQuery.trim()) {
      return [];
    }

    const query = debouncedQuery.toLowerCase();
    return allServices.filter((service) => {
      return (
        service.name.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.ministryName.toLowerCase().includes(query) ||
        service.departmentName.toLowerCase().includes(query)
      );
    });
  }, [debouncedQuery, allServices]);

  return (
    <div className="w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full pl-10 sm:pl-12 pr-10 sm:pr-4 py-3 sm:py-4 text-base sm:text-lg text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-sm placeholder:text-gray-400"
          placeholder="Search for services, departments, or ministries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search services"
        />
        {searchQuery && (
          <button
            className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center text-gray-400 hover:text-gray-600"
            onClick={() => setSearchQuery('')}
            aria-label="Clear search"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results */}
      {debouncedQuery && (
        <div className="mt-4">
          <div className="mb-4 text-sm text-white">
            Found {searchResults.length} service{searchResults.length !== 1 ? 's' : ''}
            {searchResults.length > 0 && ` matching "${debouncedQuery}"`}
          </div>

          {searchResults.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((service) => (
                <div
                  key={service.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-primary-500 dark:border-primary-400"
                >
                  <a href={`/service/${service.id}`} className="block group">
                    <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-400 group-hover:text-primary-900 dark:group-hover:text-primary-300 transition-colors mb-2">
                      {service.name}
                    </h3>
                  </a>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{service.description}</p>

                  <div className="flex flex-wrap gap-3 text-xs">
                    <div className="flex items-center bg-secondary-50 text-secondary-800 px-3 py-1 rounded-full">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {service.cost}
                    </div>

                    <div className="flex items-center bg-blue-50 text-blue-800 px-3 py-1 rounded-full">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {service.processingTime}
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {service.ministryName} &bull; {service.departmentName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {searchResults.length === 0 && (
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No services found</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Try searching with different keywords
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
