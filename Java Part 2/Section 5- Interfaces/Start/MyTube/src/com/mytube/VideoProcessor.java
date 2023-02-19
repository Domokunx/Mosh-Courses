package com.mytube;

public class VideoProcessor {
    private Storable database;
    private Encodable encoder;
    private Contactable platform;

    public VideoProcessor(Encodable encoder, Storable database, Contactable platform){
        this.encoder = encoder;
        this.database = database;
        this.platform = platform;
    }
    public void process(Video video) {
        encoder.encode(video);
        database.store(video);
        platform.sendNotification(video.getUser());
    }
}

