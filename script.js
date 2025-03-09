// Resource categories from README.md
const categories = [
    {
        emoji: "🐍",
        title: "Python e-books for cyber security",
        resources: [
            { title: "Python for Offensive PenTest-A guide to ethical hacking and penetration testing", url: "https://mega.nz/file/9zdQmAzA#G0umpFTkFzZBlobrlwP-7h2q1xty6N9fhKnWYAwN2o4" },
            { title: "Violent Python for Hackers, Forensic Analysts, Penetration Testers and Security Engineers", url: "https://mega.nz/file/hrdyER4Z#Yw2RShTIlyv1oCj1pnrJKZ4bjRJB9ppF65g6_CkgB20" },
            { title: "Learning Python", url: "https://mega.nz/file/cjcmTbaZ#wEBMHBdO6q-WKW1mkqeusEnjZAac5T1hXLWWr6pZFlE" },
            { title: "Black Hat Python Programming for Hackers and Pentesters", url: "https://mega.nz/file/F2dHVLhC#iw3gW9eyFP1nHl2OKDpWZAs4FTboWPlekx47iVGvU1" },
            { title: "Modern Python Cookbook", url: "https://mega.nz/file/R78ijShK#wCgvS865nwiubZpIA6VkVqHfpVrktlcwWErbAuID5LI" },
            { title: "Hacking with Python Ultimate Beginner's Guide", url: "https://mega.nz/file/A3cxzDqI#DI5K27Fj-FjEWOUACH1t3XRTl3ieZIRggmDG8RG3C7k" },
            { title: "Python Web Penetration Testing Cookbook", url: "https://mega.nz/file/I6tHCRAZ#XNwqVn6lGx0KmlGTopGPDj7ypF_BFCU4toxFtPZMKlw" },
            { title: "Mastering Python Networking", url: "https://mega.nz/file/ArlEFIqa#fmNxFhInh04deqtoOiQREZG6Dtvqgla9LeLmdk0r5Bc" },
            { title: "Machine Learning and Security", url: "https://mega.nz/file/UvdCRBpA#0Sy1Onol4pIV4qx5Om0huLh7pKx8QLpdrqmk6XQmTPU" }
        ]
    },
    {
        emoji: "🪱",
        title: "Malware Analysis e-books",
        resources: [
            { title: "Malware Analysis Fundamentals", url: "https://mega.nz/file/s2tzEbDQ#dgL2kTCZ5PMGP_Ybb4x_nop7WsQP0nxAN7uUOvOjNeU" },
            { title: "THE IDA PRO BOOK", url: "https://mega.nz/file/omMykYgZ#i6tgJkk6TDNltbGw-mCcetH9C4xmR6znKMXvHogWNx0" },
            { title: "Advanced Malware Analysis", url: "https://mega.nz/file/47NRgY6Q#oqBx6sBDfrLd_FDgY-NWbb5KTcwd_ja0WZxClPxpMIA" },
            { title: "Detection of Intrusions and Malware, and Vulnerability Assessment", url: "https://mega.nz/file/MiMXDCwS#n4dY2pM77egOgdMPlrYM782rwg4kWGDRYlG6XSOkKyI" },
            { title: "Learning Malware Analysis", url: "https://mega.nz/file/9y1VELzA#Funa-9hdX-mQ4GfJXzE7fkzg2OjE1aZymn47EBmxCuA" },
            { title: "Malware Analyst's Tools and Techniques", url: "https://mega.nz/file/9qUD2Z5Q#JRbX5yS5fJjokudYRFiPSWrnz-7sg23TT1MOhLrtw84" },
            { title: "Malware Detection Advances in Information Security", url: "https://mega.nz/file/N6FEBBxb#-sdpvizm2p_f3i11mnz4zpusFCZl-UhWUF-vqLi3ZiQ" },
            { title: "The Rootkit ARSENAL", url: "https://mega.nz/file/I68SGB4Z#7IWsn4GvMmRL8ZTJBMs9ySoLIrt2Pn1PJ7IrXeqNbYw" },
            { title: "Windows Malware Analysis Essentials", url: "https://mega.nz/file/l7912D4Z#cpN3yzhyYJNyMBupvFX5S9ScC0rdZ2yYpNUvlVgRiWE" },
            { title: "PRACTICAL MALWARE ANALYSIS", url: "https://mega.nz/file/Bi8xkKZb#7zP3Xbj-KsEn0Tnp1VM8sluT-tdPnvxIR4IZacLhHL8" },
            { title: "Writing Security Tools And Exploits", url: "https://mega.nz/file/Ii92QKqB#VWwxBrfi84zMoZjg28ArxeX8fCF8EvTyfOFt7JazmGA" },
            { title: "Windows Virus and Malware Troubleshooting", url: "https://mega.nz/file/oiFTwRAa#sNinIxV03YguAgcsePEX9ZnqxQ8MfQx_nz1_osw2mQ0" },
            { title: "Rootkits and Bootkits: Reversing Modern Malware and Next-Generation Threats", url: "https://mega.nz/file/kuMl2ZwK#rHQoTkzP4aKzAx2-tAFzIhAnH02a0bQDbs0CbN275RE" },
            { title: "Malware Analysis Techniques: Tricks for the Triage of Adversarial Software", url: "https://mega.nz/file/tu91TKLY#KpPfG5VV3qPTnBQqnfeTacR_DPwmCJSlW1g91TsRssU" },
            { title: "Malware Data Science: Attack Detection and Attribution", url: "https://mega.nz/file/pmEB2LTZ#p-PuEhR6TCtcpT5V2UevJAzy0wrjxjBvwjByGVn886A" }
        ]
    },
    {
        emoji: "🔍",
        title: "Digital Forensics Analysis e-books",
        resources: [
            { title: "The Art of Memory Forensics", url: "https://mega.nz/file/hr0z2TqQ#8WI3aZG37uDroAW4mzouyxbR9aMeej0TdktNlIFa9S0" },
            { title: "Practical Forensic Imaging", url: "https://mega.nz/file/VvliCSID#4VG28zt7zII8dYd3I0K5gPOkBYA2G_spCRMgb2T6C94" },
            { title: "Malware Forensics Field Guide for Windows Systems", url: "https://mega.nz/file/U2E3hDBI#kKAeC5d0_0I0tjtcVD0-lxF3mWOm_YRy0_wtAqTllN4" },
            { title: "Cyber Forensics: A Field Manual for Collecting", url: "https://mega.nz/file/Ij0ljJYK#TeOboJs3E2YlqCAorbGMjN2zLgo_IiFasI9rnpVo0bE" },
            { title: "Attacking Network Protocols", url: "https://mega.nz/file/Zv11kRKZ#XjNVv6LSkeqvmrJXc7m0nJLl_z4GbRRJiR-IUCNIwsA" },
            { title: "Digital Forensics With Open Source Tools", url: "https://mega.nz/file/Yv11HLgT#Eiq1E2v9QMccojtdubLKcUnj2hDIH1R-22FA_5h58Oc" },
            { title: "Cyber Forensics", url: "https://mega.nz/file/J6U0AYbR#Wayy_YHd4d5zIiUNhokwWb2XcwtTBde_EosZXRoBOa4" },
            { title: "Hacking Exposed Malware And Rootkit", url: "https://mega.nz/file/kidBUSwB#JSGadYAZ7Lf5SB7fsaaBH9tW2x4DsU0MomafBX1qS1U" },
            { title: "Digital Forensics", url: "https://mega.nz/file/c7ER2QDa#S6yGqVQtb9Uo8-jdhMxpaonyU6PjwuH6KtrynEDtTlc" },
            { title: "Windows Forensic", url: "https://mega.nz/file/V2MEza5Y#1BXvdWTPZqhkxBxjeMoA926aQLfthBPFv45tlY7Z6GM" },
            { title: "Windows Malware Analysis Accelerated with Memory Dumps", url: "https://mega.nz/file/x200zRJT#6t_W3yzAmXTP-dNLcygH00Sr-L6dwLRah16YtM6Mkyw" },
            { title: "Computer Viruses and Malware", url: "https://mega.nz/file/k6cREYKC#BHYswqQpBT_zmXAZ3pOcUAOsAgyU6UXHjUM3QjktIfM" },
            { title: "Wireshark for Security Professionals", url: "https://mega.nz/file/NzFnDJpI#2rPNrehkvzSVwy_5i-ktbgZPLao-o31opDH2pIdsS3U" },
            { title: "Reverse Engineering for Beginners", url: "https://mega.nz/file/R3lFlbRK#uzDu-PFA1Qwz3Tt2jKSML2Hib3TJA3eO3rutrFlbv2Q" },
            { title: "Computer and Information Security Handbook", url: "https://mega.nz/file/U711ECoa#-oNBfIpZMin9aHkSqp9c53ROujnOG_HBtBzYHnXorpc" },
            { title: "Windows Forensic Analysis", url: "https://mega.nz/file/UqsmWRTS#7U8K11sWb2BHsygebX51mT6WweWeNpa2EJnOXG_HncQ" },
            { title: "Computer Viruses for Dummies", url: "https://mega.nz/file/MnsH1R4T#oMEWe0WyZV_HGl3zLIwY_TeuwTiv9jew8doLMBUcTqw" },
            { title: "Binary Instrumentation for Security Professionals", url: "https://mega.nz/file/o2VGCABa#eRXjukBE-IqbZQKW9YGRIsvonIxCthU0aiXS-7ws3IY" },
            { title: "Hacking Exposed Computer Forensics", url: "https://mega.nz/file/4y8wyQaC#fmhtss1-psHBcW687dAEWY0awXHN21GaumGtftAEOcY" },
            { title: "Learn Computer Forensics", url: "https://mega.nz/file/lz1TEKgB#tuxEfI_SUMi7Psas_AFNS64Etzscv331eNuUGATxXVE" },
            { title: "Linux Malware Incident Response", url: "https://mega.nz/file/tyc3HARB#hjThv-RgjOuNSdoNZ3-NadhN9bty58GAoFje_59Y4_w" },
            { title: "The Basics of Digital Forensics", url: "https://mega.nz/file/Bi8FTYwa#D_vvp3RXTzRYheq50n2Eryc6JSIVgsaO84LkQxSt4Xw" },
            { title: "Digital Forensics Basics: A Practical Guide Using Windows OS", url: "https://mega.nz/file/4ismHSrb#l6Ew0KtqM12bz3luNiO6vQOb9_OwWycMWurNTLN_fC4" },
            { title: "PowerShell and Python Together", url: "https://mega.nz/file/BrESBCCD#HJZx8SyTAgrbeBeK8n5jw7zg-0lQ5Yv0ah_98XQ7m1Y" },
            { title: "Incident Response & Computer Forensics, Third Edition", url: "https://mega.nz/file/An9GSTbR#CDNGd7HsS-1JsA61Zk3G0Y9v6SMbvczDttPG5VBlryE" },
            { title: "Computer Forensics: Cybercriminals, Laws, and Evidence", url: "https://mega.nz/file/sz8hxRIQ#wuDQusUYkuRu6hZMRDazgcR2GqhoBGJHcrYNJw03Riw" },
            { title: "Guide to Computer Forensics and Investigations", url: "https://mega.nz/file/5u8UBBIT#TsKEgmARIQXrtTJRrOGRFX-Mr1nJofCW5lFtcKx712c" },
            { title: "Hacks, Leaks, and Revelations", url: "https://mega.nz/file/VyUWGaZZ#OsY7iomYuRGWzOym8YW-xRTfZjYYJ7tJ9p7-Mbcy4Jk" }
        ]
    },
    {
        emoji: "🐉",
        title: "Kali Linux e-books",
        resources: [
            { title: "Basic Security Testing with Kali Linux", url: "https://mega.nz/file/k7lGhLwb#ge8EiyjxBhz3UK2B9PyatlDeDa73C_s_aEOFQhlkUvE" },
            { title: "Kali Linux Network Scanning Cookbook", url: "https://mega.nz/file/gi9zlZRA#txHoGtSR6LkqCZRSaezXZAKugmcczLL8tQ8hGipGBFQ" },
            { title: "Kali Linux - Assuring Security by Penetration Testing", url: "https://mega.nz/file/1vsjARwb#GOZqRaCMBdl9K7ARlzi-we8ZbWudqdOi1W1Ogux0abg" },
            { title: "Kali Linux 2 Windows Penetration Testing", url: "https://mega.nz/file/IjlgABCI#kGwicfEkg-DXKEemI1XEcsG6LJ-gU0LZW5VojiXSDE8" },
            { title: "Kali Linux Cookbook", url: "https://mega.nz/file/BnlmCK5L#MnP9bVCWmupj1s116lwYFUiCpSgt0RecAAmllklzZd0" },
            { title: "Web Penetration Testing with Kali Linux", url: "https://mega.nz/file/03kQGCIb#isjHmE1tDHlN87F5NeYgBLhmkicLkW5cqb85dq43Ua4" },
            { title: "The Ultimate Kali Linux Book - Perform Advanced Penetration Testing", url: "https://drive.google.com/file/d/16tl5Fw6E21bN5Sl2osHW5lv923nl0Cgq/view" },
            { title: "Web Penetration Testing with Kali Linux (Build your defense against web attacks)", url: "https://mega.nz/file/1mFlwKzC#brozDpcIwJB3hJ9cPi1Dx8jZthb8rIHvp_NbEq7Hj_8" },
            { title: "Hands-On Penetration Testing on Windows (Unleash Kali Linux, PowerShell, and Windows debugging tools for security testing and analysis)", url: "https://mega.nz/file/xnlj3YYA#wXuHHZ4Lj8na6IZ-avxvrdF4I2ceOt_r1TB6fT8Pd6s" },
            { title: "Kali Linux Tools (Digital Forensics Penetration Testing)", url: "https://mega.nz/file/9mcByDzA#Vmdj_zjB-6sYRPw94pwuhoo6_V-RLkYQZLFesAqFZHQ" },
            { title: "Kali Linux Wireless Pentesting and Security for Beginners", url: "https://mega.nz/file/prshWa4Y#bfTx1vFAAUN0FvIUIFYgEPjPqrv81l2Rj76rf4r7Kq0" },
            { title: "Linux Basics for Hackers - Getting Started with Networking, Scripting, and Security in Kali", url: "https://mega.nz/file/8zFxxYxY#fEFPbl7BSNg8WbFNPSCH-BXhNX4EFbduLmO_Sv-zgBs" },
            { title: "Kali Linux Revealed - Mastering the Penetration Testing Distribution", url: "https://mega.nz/file/8zEGlJ7b#q4b3CqhClGIWdcDuBmOjQl_AUdwoWpYJi9m2bYPScCs" }
        ]
    },
    {
        emoji: "🕵️",
        title: "Hacking/Penetration testing e-books",
        resources: [
            { title: "Gray Hat Hacking The Ethical Hacker's Handbook", url: "https://mega.nz/file/hyNkjYzI#2r_6HvaezNHX6-mUjdsVEnSHTFBk4OYQ6pK8QCtzDIw" },
            { title: "Gray Hat Hacking: The Ethical Hacker's Handbook, Fifth Edition", url: "https://mega.nz/file/w6MxHaQJ#2OCTuDz-kH2XdlaBVbieBOchECCPVa4KQsKQWlhlNIQ" },
            { title: "Gray Hat Hacking: The Ethical Hacker's Handbook, Fourth Edition", url: "https://mega.nz/file/tiETAAgK#Oe6V2B2rvfX1fVw9zIoZrJ5UokqTsEzvmU6BcIv7KnM" },
            { title: "Gray Hat Hacking: The Ethical Hacker's Handbook, Second Edition", url: "https://mega.nz/file/xqNTkDSZ#damPBWDgfZSDorPNK1PcFQEy7kkcD7OzjMgecy-_RlY" },
            { title: "Penetration Testing: A Survival Guide", url: "https://mega.nz/file/R6lg1ZpA#XiOurtVzYTYQhhcey363DndjpCr6Vik6ZGThPfsrEd4" },
            { title: "Mastering Modern Web Penetration Testing", url: "https://mega.nz/file/56kFwRYI#EuxppH8ffTGex-nE4OadcPZKbFmsmi7B9ckjxOsxs6k" },
            { title: "THE HACKER PLAYBOOK 2 Practical Guide To Penetration Testing", url: "https://mega.nz/file/xvFAXbbY#46O9rVl5M1XD_rX9C6kxtCtyugbcCBRaVQpQCWJLHzU" },
            { title: "The Basics of Hacking and Penetration Testing", url: "https://mega.nz/file/8zE3DYaQ#32J57fId1svnszA22E8EQ6oHRpOfynWqIENZ1aTCcSs" },
            { title: "Quick Start Guide to Penetration Testing", url: "https://mega.nz/file/ljsTEYgL#R83W1gxgSHZxPMMdJ-jbV80GnQbn5q5x7y2W0cWbctU" },
            { title: "ETHICAL HACKING AND PENETRATION TESTING GUIDE", url: "https://mega.nz/file/Fq8RkDBT#D01uZMeHOW_lH-btEYu1lW2qCJK0MNMzW_TyX8wAHiI" },
            { title: "ETHICAL HACKING 101: How to conduct professional pentestings in 21 days or less!", url: "https://mega.nz/file/53FmySJD#w-NFfIYil_UV_KduI7PSPYg_EGMtEdNlHWelmYVHI7U" },
            { title: "HackLOG Security & Ethical Hacking Handbook VOLUME 1 ANONYMITY", url: "https://mega.nz/file/8jUi2QRa#3QayQ3fmTSE5bne-7BnfWiPyV6fnNoxAzhKbyZMiAhY" },
            { title: "THE HACKER PLAYBOOK 3 Practical Guide to Penetration Testing", url: "https://mega.nz/file/F6dGHYZL#WnL2FGRQf5aKm1YBRGTUAMvIbTXFLnB49XZWi4-cp0g" },
            { title: "Hacking: The Ultimate Hacking for Beginners", url: "https://mega.nz/file/RzFkQaqL#5Nsce2J0a3JQD73DrG7HOTpU_mUZ41rWf_DtOQiGbRQ" },
            { title: "Prophet Hacker: Android Hacking Book", url: "https://mega.nz/file/Un9kGKYK#7-5VZohI9LOai6zMe79h_8GDLWAzqlqxqK7o8QAv1-c" },
            { title: "Hacking Bible", url: "https://mega.nz/file/Y7F2FBbS#EbZXkvsx5W5i6wDjWGWzRrUTSbm735qHJL3Zey4p1qU" },
            { title: "Web App Hacking (Hackers Handbook)", url: "https://mega.nz/file/8uFDQCaK#7a0gMH7SLAUZ3fkjEgZ_Tgyq79FxWgCVFD9TgLOZbyE" },
            { title: "Pentesting Azure Applications", url: "https://mega.nz/file/83UxGLDY#-mz_Yfuh3aTNSIDWWB4YjKm8bDZVko6fHxGjOjp8Om4" },
            { title: "Gray Hat C#: A Hacker's Guide to Creating and Automating Security Tools", url: "https://mega.nz/file/561VBTYL#lhOPeO9DWei3ZLFCbNRpTuSKbLQk1PjSWpPDuvVhT0w" },
            { title: "Antivirus Hackers Handbook", url: "https://mega.nz/file/ArUjmSyZ#zVtTgrPpxUhpm4FvS81x1zV9QxByHQ2Jdu62gfM-Ymg" },
            { title: "HACKING EXPOSED™ 6: NETWORK SECURITY SECRETS & SOLUTIONS", url: "https://mega.nz/file/grlikLyJ#fd4RF5d3Osharerzu68dKbJZAhydAvTsn9ooYc6dMF4" },
            { title: "HACKING SECRETS EXPOSED - A BEGINNER'S GUIDE", url: "https://mega.nz/file/l70g0byK#OnlDJs4uaTVATnieZdkbxfCJzWD9ozwN8omFin-2-FY" },
            { title: "Hacking Exposed™ Web Applications 3", url: "https://mega.nz/file/xmkAhYYB#izv3v9qLfoZpoml6AjkjFQFbTnt1C_rbPMmv3Rw4j4k" },
            { title: "HACKING EXPOSED: NETWORK SECURITY SECRETS & SOLUTIONS 2nd Edition", url: "https://mega.nz/file/JvUWFIST#8Ptt4_bT6nurez4C7iBxOuxYEqVyketPHzKZF7deQhE" },
            { title: "HACKING EXPOSED™ Windows", url: "https://mega.nz/file/MiUHiSZa#gccpQGFJ-U2E17im4yAHHNODIv6n_C7AXE82fkil5rY" },
            { title: "Hacking Exposed - Linux: Linux Security Secrets", url: "https://mega.nz/file/wnkTUZha#h3B2LOczQ0NQlEB18UVCPl_E-e5G5bbR5ZtntZaLdFE" },
            { title: "Black Hat Bash Scripting for Hackers and Pentesters", url: "https://mega.nz/file/1r9ViKjJ#rCjNeEx4eQgt4TnrC73DB-nv2IMDQ8LZOiqX5AvLHFg" },
            { title: "Black Hat Go: Programming for Hackers and Pentesters", url: "https://mega.nz/file/1r9ViKjJ#rCjNeEx4eQgt4TnrC73DB-nv2IMDQ8LZOiqX5AvLHFg" }
        ]
    },
    {
        emoji: "📱",
        title: "Mobile Hacking",
        resources: [
            { title: "Android Hacker's Handbook", url: "https://mega.nz/file/pyczWCLI#mv8ZE0K7e2IfHnqj4rX1gq-BoKKJEWm5NHnL2yMpHpg" },
            { title: "iOS Application Security", url: "https://mega.nz/file/gnk3mYSB#lIeHw3ySAKIwtDp2ERmAKBoiDMbVOMh-6A7Q0rdv55E" },
            { title: "Mobile Pentesting with FRIDA", url: "https://mega.nz/file/UrNkjI5D#X_d1sYnieUrq77Bo5CYn24ngwYuGNHjxqNNKgJKl7sw" },
            { title: "Mobile Security For Dummies", url: "https://mega.nz/file/ZrUyUCjJ#epVsuCmoK2RZ5mka69lhfAyAa3admVldvI51jb_5zEo" },
            { title: "Android Application Security", url: "https://mega.nz/file/8mU3yRTZ#r-a15ykdqYapnkidh8W5xTZ44DZ5jOkcej1Wk2WPCYk" },
            { title: "Mobile Device Exploitation Cookbook", url: "https://mega.nz/file/EusVDQgD#fQ57ItOigNa8PwGEGMYWD1yUBGKeAsAhMxR5f7_y-Pw" },
            { title: "Hacking Android", url: "https://mega.nz/file/FiMyFAhQ#wrmfTZB6VwNn3GTXH5WrsUgBxUXaaEnkPr_VHdwVtj0" },
            { title: "Mobile Exploitation - The Past, Present, and the Future", url: "https://mega.nz/file/FrER3SLY#zVEsbehZCea4f4OS0uM7fRBxA8B1VkBZtXS7QQlF8eY" },
            { title: "Android Security Internals - An In-Depth Guide to Android's Security Architecture", url: "https://mega.nz/file/0vcDASoC#3y9VyNUvXR_8-eRkhfRneWwafPGQW87rbyU2DZ_STUE" }
        ]
    },
    {
        emoji: "🎛️",
        title: "IOT Hacking",
        resources: [
            { title: "IOT Security Guide 2022", url: "https://mega.nz/file/8jkBRRSI#k8NCiCLFW5l9xiPkCcyTfNs3kpr89dYQtQ60jFSTTDM" },
            { title: "Handbook of Big Data and IoT Security", url: "https://mega.nz/file/Jz0C3YQT#Vyn175zwT3B_qCarZXXha4Vmh2eBELaXAgNNdHT1b14" },
            { title: "Hacking IoT for Bug Bounties", url: "https://mega.nz/file/V3VliDhJ#Y2i3KnZYJW1tfLrznZWYOBmezukmbDzdANoNGw1vOTI" },
            { title: "The IoT Hacker's Handbook", url: "https://mega.nz/file/8jV0AZiD#EWm8ZQhWcJO4FnYpM_CLfwMaRjg0PrNFip1cX0W9PDY" },
            { title: "PRACTICAL IOT HACKING. The Definitive Guide to Attacking the Internet of Things", url: "https://mega.nz/file/d2E0DA7L#V198m-Q_fPYSpuH0ZFRbooC526GQbMdIkFOAVHruz-c"}
        ]
    },
    {
        emoji: "🔧",
        title: "API Security",
        resources: [
            { title: "Extreme Networks Security API Reference Guide", url: "https://mega.nz/file/4ykznCDK#owaKNuTUJTC4ElZD8G6ylhvqxig3ssEO4b8ZTM5w0rY" },
            { title: "Advanced API Security", url: "https://mega.nz/file/13sgFQKS#QbWazP_Rho4ABzfvRXGVh0iVDUM8HkgGVcRMJhJ2wD4" },
            { title: "Pro ASP-NET Web API Security", url: "https://mega.nz/file/ZyMjWRiJ#Ehhh5CU8JC5tB4dMzUrwG2uV9iBy29nXVLqOw3byltI" }
        ]
    },
    {
        emoji: "🔢",
        title: "Cryptography",
        resources: [
            { title: "Serious Cryptography", url: "https://mega.nz/file/Z2U3CCab#WYCVOgxexq2nh2L62Dpr4_H5EvbMPWWIHmym6qm92cQ" },
            { title: "Introduction to Cryptography", url: "https://mega.nz/file/Nn8yGQwB#ADGkRTRD_hHMuZUByRHmzsui1q1sbRXb6f5y1YFGk-8" },
            { title: "Cryptography and network security", url: "https://mega.nz/file/AzdHGQwb#FD9UriZIOdFm7AxWqKlpUhVaMMwfTSWwm7O4Fp7JAD8" },
            { title: "Applied Cryptography in .NET and Azure Key Vault", url: "https://mega.nz/file/47E3UYDJ#BGt8WpTKUTRXnfQ1wjkQslv5vglUkfO1UtHLeRqq1zs" },
            { title: "Hands-On Cryptography with Python: Leverage the Power of Python to Encrypt and Decrypt Data", url: "https://mega.nz/file/ImVnBQaR#ecVuKeVLL9N_139KX9YHXbScK8UTVdxl1Asw-vymMxs"},
            {title: "Cracking Codes with Python: An Introduction to Building and Breaking Ciphers", url: "https://mega.nz/file/x3MwwLbI#o6VSk3Fiowt_EO4ldD1uNezWCXuDCbE_yUUvh_QXL3Q"}
        ]
    },
    {
        emoji: "🗃️",
        title: "Miscellaneous",
        resources: [
            { title: "Cyber Security on Azure An IT Professional's Guide to Microsoft Azure Security Center.", url: "https://mega.nz/file/Vr80RQJb#uNZoG733rEGmqVgf2NkHuBu9KOVvXt0afP1JE6kDlKg" },
            { title: "Practical Cloud Security A Guide for Secure Design and Deployment", url: "https://mega.nz/file/Z6cUnAAR#986xZSb6MhdMbK-kN1ov4lCnro9lDdLdy5juL-Kgp3A" },
            { title: "The Tangled Web. A Guide to Securing Modern Web Applications", url: "https://mega.nz/file/9msyETrZ#hNtuGngzjjlJ6UFOkXlc7QhNY5XN_mv3QIae2iqS3S4" },
            { title: "Linux Command Line and Shell Scripting Bible (Massive Guide 1052 pags)", url: "https://mega.nz/file/h6NVVLoB#-C4siioCXHXS4iTOg3UHI5t0twmxOUeG4W8Nj_2rALY" },
            { title: "Nmap Official Guide+ Scripts.", url: "https://mega.nz/file/A21nTB5S#9rfwjADO1qrXhP2Nbd1U8EKaV3LFf8Lg3xsT-5NNkUc" },
            { title: "Network Security Bible.", url: "https://mega.nz/file/AuVFSRzJ#W3Xg4TkWvRYPCOzPbdTK3wCfh_ThEXPcybGeClxdAGI" },
            { title: "Anti-Hacker Tool Kit", url: "https://mega.nz/file/Rm1RlZBI#ej1Xr-0Fa1xARsOh9wpFzkCy9DomxenKuGHf4RSy8yU" },
            { title: "TOR DARKNET BUNDLE (5 in 1) Master the ART OF INVISIBILITY (Bitcoins, Hacking, Kali Linux)", url: "https://mega.nz/file/kudhSLYR#zX9PBwSRMLlIy4X-uYkhqu-tb3Ia2ALzSeJYKvsLiyY" },
            { title: "EVADING EDR A COMPREHENSIVE GUIDE TO DEFEATING ENDPOINT DETECTION SYSTEMS", url: "https://mega.nz/file/Eu8VSABD#kSLyZzsjA2lQx9hYx3axSENdEtd7AmkTIxhXFT6WKdo" },
            { title: "Evading EDR The Definitive Guide to Defeating Endpoint Detection Systems.", url: "https://mega.nz/file/JmE0XbpI#LRG5b4zrZHWgXDZuFcrdWV1GlObkDVZt25H23gt2lOI" },
            { title: "Windows Security Internals with PowerShell", url: "https://mega.nz/file/83d1BBja#INXRQ_tj5frJtUiQt-XzXBAxTzETVzU0ZSPJCqPocHc" },
            { title: "Infrastructure as Code Evolving systems in the Cloud", url: "https://mega.nz/file/hz1lVCSZ#RzOhoiYFfaRs-FBHrDDXIjoMfhl6au4cl1U9gIHkTtc" }
        ]
    }
];

// DOM Elements
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoriesContainer = document.getElementById('categories-container');
const loadingContainer = document.getElementById('loading-container');
const backToTopBtn = document.getElementById('back-to-top');
const searchResults = document.getElementById('search-results');
const searchResultsList = document.getElementById('search-results-list');

// Theme Toggle Functionality
function toggleTheme() {
    const body = document.body;
    const icon = themeToggleBtn.querySelector('i');
    const text = themeToggleBtn.querySelector('span');

    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        icon.classList.replace('fa-moon', 'fa-sun');
        text.textContent = 'Light Mode';
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
        text.textContent = 'Dark Mode';
    }

    // Save theme preference
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Load saved theme
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        toggleTheme();
    }
}

// Create category element
function createCategoryElement(category) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category';
    
    categoryDiv.innerHTML = `
        <div class="category-header">
            <h2><span class="category-emoji">${category.emoji}</span> ${category.title}</h2>
            <i class="fas fa-chevron-down"></i>
        </div>
        <div class="category-content">
            <ul class="resource-list">
                ${category.resources.map(resource => `
                    <li class="resource-item">
                        <a href="${resource.url}" target="_blank" rel="noopener noreferrer">
                            ${resource.title}
                        </a>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;

    // Toggle category expansion
    const header = categoryDiv.querySelector('.category-header');
    header.addEventListener('click', () => {
        categoryDiv.classList.toggle('active');
        const icon = header.querySelector('i');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    });

    return categoryDiv;
}

// Search functionality
function searchResources(query) {
    const searchTerm = query.toLowerCase().trim();
    
    if (searchTerm === '') {
        hideSearchResults();
        resetCategoryDisplay();
        return;
    }
    
    // Show search results dropdown
    const results = [];
    
    categories.forEach(category => {
        category.resources.forEach(resource => {
            if (resource.title.toLowerCase().includes(searchTerm)) {
                results.push({
                    category: category.title,
                    categoryEmoji: category.emoji,
                    title: resource.title,
                    url: resource.url
                });
            }
        });
    });
    
    if (results.length > 0) {
        displaySearchResults(results);
    } else {
        searchResultsList.innerHTML = `<li class="search-result-item">No results found for "${query}"</li>`;
        searchResults.classList.add('active');
    }
}

// Display search results in dropdown
function displaySearchResults(results) {
    searchResultsList.innerHTML = '';
    
    results.forEach(result => {
        const li = document.createElement('li');
        li.className = 'search-result-item';
        
        li.innerHTML = `
            <a href="${result.url}" target="_blank" rel="noopener noreferrer">
                <div class="search-result-category">
                    <span class="category-emoji">${result.categoryEmoji}</span> ${result.category}
                </div>
                <div class="search-result-title">${result.title}</div>
            </a>
        `;
        
        searchResultsList.appendChild(li);
    });
    
    searchResults.classList.add('active');
}

// Hide search results dropdown
function hideSearchResults() {
    searchResults.classList.remove('active');
}

// Reset category display
function resetCategoryDisplay() {
    categories.forEach((category, index) => {
        const categoryElement = categoriesContainer.children[index];
        categoryElement.style.display = 'block';
        
        const resourceItems = categoryElement.querySelectorAll('.resource-item');
        resourceItems.forEach(item => {
            item.style.display = 'block';
        });
    });
}

// Filter categories based on search
function filterCategories(query) {
    const searchTerm = query.toLowerCase();
    
    categories.forEach((category, index) => {
        const categoryElement = categoriesContainer.children[index];
        let hasMatch = false;

        // Search in category title
        if (category.title.toLowerCase().includes(searchTerm)) {
            hasMatch = true;
        }

        // Search in resources
        const resourceItems = categoryElement.querySelectorAll('.resource-item');
        resourceItems.forEach((item, i) => {
            const resourceTitle = category.resources[i].title.toLowerCase();
            if (resourceTitle.includes(searchTerm)) {
                item.style.display = 'block';
                hasMatch = true;
            } else {
                item.style.display = 'none';
            }
        });

        // Show/hide category based on matches
        categoryElement.style.display = hasMatch ? 'block' : 'none';
    });
}

// Show/hide back to top button
function handleScroll() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Hide loading screen
function hideLoading() {
    setTimeout(() => {
        loadingContainer.style.opacity = '0';
        setTimeout(() => {
            loadingContainer.style.visibility = 'hidden';
        }, 500);
    }, 1500);
}

// Simulate hacking text effect for loading
function simulateHackingText() {
    const loadingText = document.querySelector('.loading-text');
    const originalText = "LOADING...";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    
    let iterations = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
        loadingText.innerText = originalText
            .split("")
            .map((char, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");
        
        if (iterations >= originalText.length) {
            clearInterval(interval);
        }
        
        iterations += 1/3;
    }, 50);
}

// Initialize the page
function init() {
    // Set the data-text attribute for glitch effect
    const title = document.querySelector('header h1');
    title.setAttribute('data-text', title.textContent);

    // Load saved theme
    loadSavedTheme();

    // Create category elements
    categories.forEach(category => {
        categoriesContainer.appendChild(createCategoryElement(category));
    });

    // Simulate hacking text effect
    simulateHackingText();
    
    // Hide loading screen
    hideLoading();

    // Event Listeners
    themeToggleBtn.addEventListener('click', toggleTheme);
    
    searchInput.addEventListener('input', (e) => {
        searchResources(e.target.value);
    });

    searchBtn.addEventListener('click', () => {
        searchResources(searchInput.value);
        filterCategories(searchInput.value);
        hideSearchResults();
    });

    // Handle enter key in search
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchResources(searchInput.value);
            filterCategories(searchInput.value);
            hideSearchResults();
        }
    });

    // Hide search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target) && !searchBtn.contains(e.target)) {
            hideSearchResults();
        }
    });

    // Back to top button
    window.addEventListener('scroll', handleScroll);
    backToTopBtn.addEventListener('click', scrollToTop);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 