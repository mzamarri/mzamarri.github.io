const { 
    createIcons, 
    AppWindow, 
    Server, 
    Database, 
    Cloud, 
    Blocks, 
    Wrench, 
    Globe, 
    ExternalLink, 
    EllipsisVertical, 
    Send, 
    Mail, 
    MoveRight, 
    CircleUser, 
    Download,
    Check,
    CircleX,
    X
} = lucide;
try {
    createIcons({ 
        icons: { 
            AppWindow, 
            Server, 
            Database, 
            Cloud, 
            Blocks, 
            Wrench, 
            Globe, 
            ExternalLink, 
            EllipsisVertical, 
            Send, 
            Mail, 
            MoveRight, 
            CircleUser, 
            Download,
            Check,
            CircleX,
            X 
        }
    });
    console.log('lucide: createIcons called');
} catch (err) {
    console.error('lucide.createIcons failed', err);
}
