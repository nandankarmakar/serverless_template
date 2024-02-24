export const buildCorsAndCSPHeader = (): { [header: string]: string | number | boolean } => {
    return {
        'Access-Control-Allow-Headers': 
            'X-Forwareded-For, X-Requested-With, Content-Type,If-Modified-Since, Authorization, X-Amz-Date,X-Api-Key,X-Amz-Security-Token,x-dtc',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Strict-Transport-Security': 'max-age=3153600; includeSubDomains; preload',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'origin',
        'Content-Security-Policy': "default-src 'self'; script-src 'self'; form-action 'self'; base-uri 'self'; frame-ancestors 'none' object-src 'self' style-src 'self';",
    };
};