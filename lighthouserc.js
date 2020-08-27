module.exports = {
  ci: {
    collect: { staticDistDir: "./build" },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 1 }],
        "categories:accessibility": ["error", { minScore: 1 }],
      },
    },
  },
}
