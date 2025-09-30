const { defineConfig } = require("cypress");
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

async function setupNodeEvents(on, config) {
    await addCucumberPreprocessorPlugin(on, config);

    const options = {
        webpackOptions: {
            module: {
                rules: [
                    {
                        test: /\.feature$/,
                        use: [
                            {
                                loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                                options: config,
                            },
                        ],
                    },
                ],
            },
        },
    };
    on('file:preprocessor', webpackPreprocessor(options));

    // Rename video files with PASS or FAIL prefix after each spec run
    on("after:spec", (spec, results) => {
        if (results && results.video) {
            const videoPath = results.video;
            const status = results.stats.failures === 0 ? "PASS" : "FAIL";
            const dirname = path.dirname(videoPath);
            const basename = path.basename(videoPath);
            const newName = `${status}_${basename}`;
            const newPath = path.join(dirname, newName);
            try {
                fs.renameSync(videoPath, newPath);
            } catch (err) {
                console.error("Error renaming video file:", err);
            }
        }
    });

    return config;
}

module.exports = {
    default: defineConfig({
        video: true,
        videoUploadOnPasses: true,
        e2e: {
            specPattern: "**/*.{js,feature}",
            // stepDefinitions: "cypress/e2e/step_definitions/**/*.js",
            supportFile: "cypress/support/index.js",
            setupNodeEvents,
        },
    }),
    setupNodeEvents
};