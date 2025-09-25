import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import ngrokAxiosInstance from "../Hooks/axiosInstance";
import BackgroundImage from "../assets/images/Hero_background.jpg";
import {
  Play,
  Pause,
  RefreshCw,
  Repeat,
  VolumeX,
  Volume2,
  X,
  Minimize,
  Maximize,
} from "lucide-react";

const Hero = () => {
  const [heroData, setHeroData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        setIsLoading(true);
        const res = await ngrokAxiosInstance.get("/dynamic/hero");
        if (res.data.length > 0) {
          const latest = res.data[0];
          const feature_items =
            latest.features?.map((item) => ({
              label: item.title,
              tooltip_title: item.tooltip_title,
              tooltip_description: item.tooltip_text,
            })) || [];
          setHeroData({ ...latest, feature_items });
        }
      } catch (error) {
        console.error("Error fetching hero data:", error);
        setError("Failed to load hero content.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchHeroData();
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying && player) {
      interval = setInterval(() => {
        setCurrentTime(player.getCurrentTime());
        setDuration(player.getDuration());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, player]);

  const videoId = "PCWklHiJiKI";
  const videoOptions = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: isAutoPlay ? 1 : 0,
      controls: 0,
    },
  };

  const onReady = (event) => {
    console.log("YouTube player ready");
    setPlayer(event.target);
    setDuration(event.target.getDuration());
    if (isAutoPlay) {
      setIsPlaying(true);
      event.target.playVideo();
    }
  };

  const onError = (error) => {
    console.error("YouTube player error:", error);
    setError("Failed to load video.");
  };

  const toggleVideo = () => {
    console.log("toggleVideo called, isVideoOpen:", isVideoOpen);
    if (!isVideoOpen) {
      setIsVideoOpen(true);
      if (player && isAutoPlay) {
        setIsPlaying(true);
        player.playVideo();
      }
    } else {
      setIsVideoOpen(false);
      setIsPlaying(false);
      if (player) {
        player.pauseVideo();
      }
    }
  };

  const togglePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
        setIsPlaying(false);
      } else {
        player.playVideo();
        setIsPlaying(true);
      }
    } else {
      console.warn("Player not initialized for play/pause");
    }
  };

  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute();
        setIsMuted(false);
      } else {
        player.mute();
        setIsMuted(true);
      }
    } else {
      console.warn("Player not initialized for mute/unmute");
    }
  };

  const refreshVideo = () => {
    if (player) {
      player.seekTo(0);
      if (isPlaying) {
        player.playVideo();
      }
    } else {
      console.warn("Player not initialized for refresh");
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
    if (player && !isAutoPlay) {
      player.playVideo();
      setIsPlaying(true);
    }
  };

  const toggleFullScreen = () => {
    if (player) {
      const playerElement = player.getIframe();
      if (!isFullScreen) {
        if (playerElement.requestFullscreen) {
          playerElement.requestFullscreen();
        } else if (playerElement.webkitRequestFullscreen) {
          playerElement.webkitRequestFullscreen();
        } else if (playerElement.msRequestFullscreen) {
          playerElement.msRequestFullscreen();
        }
        setIsFullScreen(true);
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
        setIsFullScreen(false);
      }
    } else {
      console.warn("Player not initialized for fullscreen");
    }
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setIsPlaying(false);
    if (player) {
      player.pauseVideo();
    }
    if (isFullScreen) {
      toggleFullScreen();
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  if (isLoading) {
    return (
      <section className="relative min-h-[400px] flex items-center justify-center animate-pulse">
        <div className="text-gray-600 text-lg font-medium">Loading...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative min-h-[400px] flex items-center justify-center bg-gray-100">
        <div className="text-[#1d80bb] text-lg font-medium">{error}</div>
      </section>
    );
  }

  if (!heroData) return null;

  const gradientConfig = {
    direction: "to right",
    startColor: "rgba(0, 0, 0, 0.9)",
    endColor: "rgba(0, 0, 0, 0.2)",
  };

  return (
    <div className="">
      <section
        className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-cover bg-center bg-repeat animate-bg-scale"
        style={{
          backgroundImage: `url(${
            heroData.background_image || BackgroundImage
          })`,
        }}
        aria-labelledby="hero-heading"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${gradientConfig.direction}, ${gradientConfig.startColor}, ${gradientConfig.endColor})`,
          }}
        ></div>

        <div className="relative top-9 z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-18 sm:py-16 lg:py-20 max-w-7xl flex flex-col lg:flex-row items-center justify-between">
          {/* Content Container */}
          <div className="w-full max-w-3xl mx-auto xl:max-w-3xl lg:w-[60%] lg:mx-0 rounded-xl p-2 sm:p-8 lg:p-10 lg:pl-0 xl:pl-5 animate-fade-in">
            <p className="text-white text-sm sm:text-xl font-semibold mb-4 sm:mb-6 tracking-tight">
              {heroData.intro_heading}{" "}
              <span className="bg-clip-text bg-gradient-to-r from-[#1d80bb] to-[#5a5a5c] font-bold">
                {heroData.intro_highlight}
              </span>
            </p>
            <h1
              id="hero-heading"
              className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight"
            >
              <span className="block font-serif mb-2">
                {heroData.title_lines}
              </span>
              <span className="block lg:text-5xl text-white font-serif font-semibold mb-3">
                {heroData.subheading}
              </span>
              <span className="inline-block text-transparent text-lg sm:text-2xl lg:text-3xl bg-clip-text bg-gradient-to-r from-[#1d80bb] to-[#ffffff] font-medium mt-2 ">
                {heroData.description}
              </span>
            </h1>
            <div className="flex flex-col-reverse sm:flex-row justify-start sm:items-center gap-4 sm:gap-6">
              <Link to="/contact">
                <button
                  className="w-max sm:px-6 px-4 py-1 sm:py-2 bg-gradient-to-r from-[#1d80bb] to-[#5a5a5c] border border-white text-white sm:text-base text-xs font-semibold rounded-full shadow-2xl hover:bg-[#fbaf43] transition-all duration-300 ring-1 ring-[#1d80bb] ring-offset-3"
                  aria-label="Contact us"
                >
                  {heroData.button_text}
                </button>
              </Link>
              <p className="text-white sm:w-max w-full text-sm sm:text-base lg:text-lg leading-relaxed">
                {heroData.paragraph_text}
              </p>
            </div>
            {/* Feature Items */}
            {heroData.feature_items && heroData.feature_items.length > 0 && (
              <div className="mt-6">
                <h3 className="text-white text-lg font-semibold mb-4">
                  Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {heroData.feature_items.map((item, index) => (
                    <div
                      key={index}
                      className="group relative p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                    >
                      <p className="text-white font-medium">{item.label}</p>
                      <div className="absolute hidden group-hover:block bg-gray-800 text-white p-2 rounded-md shadow-lg z-20 -top-10 left-0 w-64">
                        <p className="font-semibold">{item.tooltip_title}</p>
                        <p className="text-sm">{item.tooltip_description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Video Button and Player */}
          <div className="hidden">
          <div className="hidden relative w-full md:flex justify-center max-w-md mt-8 lg:mt-0">
            {!isVideoOpen ? (
              <button
                className="relative w-16 h-16 rounded-full bg-gradient-to-r from-[#1d80bb] to-[#5a5a5c] text-white flex items-center justify-center animate-flicker"
                onClick={toggleVideo}
                aria-label="Open video player"
              >
                <Play className="w-8 h-8 text-white" />
                <div className="absolute inset-0">
                  <div
                    className="wave wave-1"
                    style={{ background: "#1d80bb" }}
                  ></div>
                  <div
                    className="wave wave-2"
                    style={{ background: "#5a5a5c" }}
                  ></div>
                  <div
                    className="wave wave-3"
                    style={{ background: "#fbaf43" }}
                  ></div>
                </div>
              </button>
            ) : (
              <div className="relative w-full max-w-md rounded-lg animate-video-open glass-effect">
                <YouTube
                  videoId={videoId}
                  opts={videoOptions}
                  onReady={onReady}
                  onError={onError}
                  className="w-full aspect-video rounded-t-lg overflow-hidden"
                />
                <div className="w-full bg-black/10 rounded-b-lg bg-opacity-75 p-2">
                  <div className="w-full mb-2">
                    <div className="relative h-1 bg-gray-600 rounded">
                      <div
                        className="absolute h-1 bg-[#fbaf43]"
                        style={{
                          width: `${
                            duration > 0 ? (currentTime / duration) * 100 : 0
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-white text-xs mt-1">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <button
                      onClick={togglePlayPause}
                      className={`w-9 h-9 p-1 flex items-center justify-center rounded-full bg-white/10 bg-opacity-10 hover:bg-[#fbaf43] transition-all duration-300 ${
                        isPlaying ? "border border-[#fbaf43]" : ""
                      }`}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-white hover:text-amber-300" />
                      ) : (
                        <Play className="w-5 h-5 text-white" />
                      )}
                    </button>
                    <button
                      onClick={refreshVideo}
                      className="w-9 h-9 p-1 flex items-center justify-center rounded-full bg-white/10 bg-opacity-10 hover:bg-[#fbaf43] transition-all duration-300"
                      aria-label="Refresh video"
                    >
                      <RefreshCw className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={toggleAutoPlay}
                      className={`w-9 h-9 p-1 flex items-center justify-center rounded-full bg-white/10 bg-opacity-10 hover:bg-[#fbaf43] transition-all duration-300 ${
                        isAutoPlay ? "border border-[#fbaf43]" : ""
                      }`}
                      aria-label={
                        isAutoPlay ? "Disable autoplay" : "Enable autoplay"
                      }
                    >
                      <Repeat className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={toggleMute}
                      className={`w-9 h-9 p-1 flex items-center justify-center rounded-full bg-white/10 bg-opacity-10 hover:bg-[#fbaf43] transition-all duration-300 ${
                        isMuted ? "border border-[#fbaf43]" : ""
                      }`}
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                    </button>
                    <button
                      onClick={toggleVideo}
                      className="w-9 h-9 p-1 flex items-center justify-center rounded-full bg-white/10 bg-opacity-10 hover:bg-[#fbaf43] transition-all duration-300"
                      aria-label="Minimize video"
                    >
                      <Minimize className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={toggleFullScreen}
                      className={`w-9 h-9 p-1 flex items-center justify-center rounded-full bg-black/10 bg-opacity-10 hover:bg-[#fbaf43] transition-all duration-300 ${
                        isFullScreen ? "border border-[#fbaf43]" : ""
                      }`}
                      aria-label={
                        isFullScreen ? "Exit fullscreen" : "Enter fullscreen"
                      }
                    >
                      <Maximize className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={closeVideo}
                      className="w-9 h-9 p-1 flex items-center justify-center rounded-full bg-black/10 bg-opacity-10 hover:bg-[#fbaf43] transition-all duration-300"
                      aria-label="Close video"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes bgScale {
            from {
              background-size: 110%;
            }
            to {
              background-size: 100%;
            }
          }
          @keyframes flicker {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.7;
            }
          }
          @keyframes wave {
            0% {
              transform: scale(1);
              opacity: 0.5;
            }
            50% {
              transform: scale(1.5);
              opacity: 0.2;
            }
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }
          @keyframes videoOpen {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
          .animate-bg-scale {
            animation: bgScale 10s ease-out forwards;
          }
          .animate-flicker {
            animation: flicker 1.5s infinite;
          }
          .animate-video-open {
            animation: videoOpen 0.5s ease-out forwards;
          }
          .wave {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            opacity: 0;
            animation: wave 2s infinite;
          }
          .wave-1 {
            animation-delay: 0s;
          }
          .wave-2 {
            animation-delay: 0.3s;
          }
          .wave-3 {
            animation-delay: 0.6s;
          }
          .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </section>
    </div>
  );
};

export default Hero;
