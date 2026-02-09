// Import all blog posts
import multiAgentLlmSystems from './multi-agent-llm-systems';
import physicsToCs from './physics-to-cs-journey';
import technicalVc from './technical-perspective-vc';
import buildingPortfolios from './building-modern-portfolios';

// Export array of all posts
export const posts = [
  multiAgentLlmSystems,
  physicsToCs,
  technicalVc,
  buildingPortfolios,
];

// Helper function to get post by ID
export const getPostById = (id) => {
  return posts.find(post => post.id === id);
};

export default posts;
