module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lighthouse.csssr.cloud',
      token: 'bcbed408-ca48-481d-9126-36be6c3b083e',
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.4 }],
        'categories:accessibility': ['warn', { minScore: 0.6 }],
        'categories:best-practices': ['warn', { minScore: 0.7 }],
        'categories:seo': ['warn', { minScore: 0.8 }],
      },
    },
  },
}
