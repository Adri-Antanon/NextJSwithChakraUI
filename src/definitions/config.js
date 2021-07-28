module.exports = {
    ENV: "production",
    API_URL: {
        production: "https://api.futbarapp.net/",
        development:
            "http://ec2-63-35-198-169.eu-west-1.compute.amazonaws.com:5000/",
        test: "http://ec2-63-35-198-169.eu-west-1.compute.amazonaws.com:5000",
        qa: "http://cache-qa-load-balancer-752230049.eu-west-1.elb.amazonaws.com/",
    },
    FUTABR_API_EMAIL: "info@futbar.com",
    FUTABR_ADMIN_EMAIL: "info@futbar.com",
    FUTABR_ADMIN_LOCALE: "es",
};
