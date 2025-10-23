const WORDPRESS_GRAPHQL_ENDPOINT = 'https://admin-al-asr.centers.pk/graphql';

export async function getPosts() {
  const query = `
    query GetPosts {
      posts {
        nodes {
          id
          title
          excerpt
          content
          date
          slug
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    return data.data?.posts?.nodes || [];
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return [];
  }
}

export async function getAllCategories() {
  const query = `
    query GetCategories {
      categories {
        nodes {
          slug
          name
          parent {
            node {
              slug
              name
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    const categories = data.data?.categories?.nodes || [];
    
    return {
      categoryTree: categories,
      allCategories: categories
    };
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return {
      categoryTree: [
        { slug: 'islamic-calendar', name: 'Islamic Calendar', children: [] },
        { slug: 'events', name: 'Events', children: [] }
      ],
      allCategories: []
    };
  }
}

export async function getPostBySlug(slug) {
  const query = `
    query GetPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        content
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        query,
        variables: { slug }
      }),
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    return data.data?.post || null;
  } catch (error) {
    console.error('Failed to fetch post:', error);
    return null;
  }
}