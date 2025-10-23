'use client'
import React, { useState } from 'react'

/**
 * Category Filter Component - Standalone category filtering with dropdowns
 * Features:
 * - Nested category support
 * - Click-based dropdowns
 * - Active state tracking
 * - Dark mode support
 */

const CategoryFilter = ({ 
  categories = [], 
  activeCategory = 'all',
  onCategoryChange = () => {} 
}) => {
  const [openDropdowns, setOpenDropdowns] = useState(new Set())

  const toggleDropdown = (categorySlug, level = 0) => {
    const key = `${categorySlug}-${level}`
    const newOpenDropdowns = new Set(openDropdowns)
    
    if (newOpenDropdowns.has(key)) {
      newOpenDropdowns.delete(key)
    } else {
      newOpenDropdowns.add(key)
    }
    
    setOpenDropdowns(newOpenDropdowns)
  }

  // Recursive component to render nested categories with CLICK-based dropdowns
  const CategoryDropdown = ({ category, level = 0 }) => {
    const hasChildren = category.children && category.children.length > 0
    const isActive = activeCategory === category.slug
    const dropdownKey = `${category.slug}-${level}`
    const isOpen = openDropdowns.has(dropdownKey)

    const handleCategoryClick = () => {
      if (hasChildren) {
        // Toggle dropdown for categories with children
        toggleDropdown(category.slug, level)
      } else {
        // Select category for categories without children
        onCategoryChange(category.slug)
      }
    }

    const handleSubCategoryClick = (subCategorySlug) => {
      onCategoryChange(subCategorySlug)
      setOpenDropdowns(new Set()) // Close all dropdowns
    }

    return (
      <div 
        key={dropdownKey}
        className={`category-dropdown ${level > 0 ? 'nested' : ''}`}
      >
        <button
          className={`category-button ${isActive ? 'active' : ''} ${hasChildren ? 'has-children' : ''} level-${level}`}
          onClick={handleCategoryClick}
          type="button"
          aria-expanded={isOpen}
          aria-haspopup={hasChildren}
        >
          <span className="category-name">{category.name}</span>
          
          {/* Dropdown arrow for categories with children */}
          {hasChildren && (
            <svg 
              className={`dropdown-arrow w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>

        {/* Children Categories Dropdown - CLICK based */}
        {hasChildren && isOpen && (
          <div 
            className={`subcategories-menu level-${level + 1}`}
            role="menu"
            aria-orientation="vertical"
          >
            {category.children.map((childCategory) => (
              <button
                key={`${childCategory.slug}-${level + 1}`}
                className={`subcategory-item ${activeCategory === childCategory.slug ? 'active' : ''}`}
                onClick={() => handleSubCategoryClick(childCategory.slug)}
                type="button"
                role="menuitem"
              >
                {childCategory.name}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  // Recursive function to find category name by slug
  const findCategoryName = (slug, categoryList = categories) => {
    for (const category of categoryList) {
      if (category.slug === slug) return category.name
      if (category.children && category.children.length > 0) {
        const found = findCategoryName(slug, category.children)
        if (found) return found
      }
    }
    return 'Selected Category'
  }

  if (!categories || categories.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-4">
        No categories available
      </div>
    )
  }

  return (
    <div className="category-filter-container">
      {/* Category Filters with CLICK-based Dropdowns */}
      <div className='flex justify-center gap-3 my-6 flex-wrap'>
        {categories.map((category) => (
          <CategoryDropdown 
            key={`category-${category.slug}`} 
            category={category} 
          />
        ))}
      </div>

      {/* Active Category Info */}
      {activeCategory !== 'all' && (
        <div className="text-center mb-6">
          <div className="active-filter-badge inline-flex items-center">
            <span className="text-sm">
              Showing posts from: <strong className="font-semibold">{findCategoryName(activeCategory)}</strong>
            </span>
            <button
              onClick={() => onCategoryChange('all')}
              className="clear-filter-button ml-3"
              type="button"
              aria-label="Clear category filter"
            >
              ✕ Clear filter
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CategoryFilter