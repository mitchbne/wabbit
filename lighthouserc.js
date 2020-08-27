module.exports = {
  ci: {
    collect: { staticDistDir: "./build" },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 95 }],
        "categories:accessibility": ["error", { minScore: 95 }],
        "categories:seo": ["warn", { minScore: 95 }],
        "categories:best-practices": ["error", { minScore: 95 }],
      },
    },
  },
}
