/** @type {import('next').NextConfig} */
const nextConfig = {
   env:{
        GOOGLE_DRIVE_RESUME_LINK:"https://drive.google.com/file/d/1GZlVMBWfOQH_uIqRdo1SHJkD-Cd2QZBB/view"
    },
   images:{
    remotePatterns:[
        {
            protocol:'https',
            hostname:"ucarecdn.com"
        },
        {
            protocol:'https',
            hostname:"cdn.qwiklabs.com"
        }
    ]
   }
}

module.exports = nextConfig
