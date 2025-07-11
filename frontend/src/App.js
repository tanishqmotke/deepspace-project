import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import React, { useState } from 'react';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [active, setActive] = useState('apod');
  const [apod, setApod] = useState(null);
  const [epic, setEpic] = useState(null);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchImages, setSearchImages] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [apodLoading, setApodLoading] = useState(false);
  const [epicLoading, setEpicLoading] = useState(false);

  // API handlers
  const fetchApod = async () => {
    setError('');
    setApod(null);
    setEpic(null);
    setSearchImages([]);
    setApodLoading(true);
    try {
      const response = await axios.get(`${API_URL}/apod`);
      setApod(response.data);
    } catch {
      setError('Failed to fetch NASA Astronomy Picture of the Day');
    }
    setApodLoading(false);
  };

  const fetchEpic = async () => {
    setError('');
    setApod(null);
    setEpic(null);
    setSearchImages([]);
    setEpicLoading(true);
    try {
      const response = await axios.get(`${API_URL}/epic/latest`);
      setEpic(response.data);
    } catch {
      setError('Failed to fetch latest Earth image.');
    }
    setEpicLoading(false);
  };

  const fetchNasaImages = async (q) => {
    setError('');
    setApod(null);
    setEpic(null);
    setSearchImages([]);
    setSearchLoading(true);
    try {
      const response = await axios.get(`${API_URL}/search?q=${encodeURIComponent(q || searchTerm)}`);
      setSearchImages(response.data.collection.items.slice(0, 18));
    } catch {
      setError('Failed to fetch NASA images.');
    }
    setSearchLoading(false);
  };

  const handleTabChange = (tab) => {
    setActive(tab);
    setError('');
    setApod(null);
    setEpic(null);
    setSearchImages([]);
  };

  const handleHeaderSearch = (query) => {
    setSearchTerm(query);
    setActive('search');
    fetchNasaImages(query);
  };

  const getWelcomeContent = () => {
    switch (active) {
      case 'apod':
        return {
          title: "Welcome to DeepSpace 🚀",
          subtitle: "Discover the universe, one day at a time.",
          action: "Click below to view today's Astronomy Picture of the Day."
        };
      case 'mars':
        return {
          title: "Mars Rover Daily Image",
          subtitle: "See the latest snapshot of Earth from space.",
          action: "Click below to view the most recent Earth image from NASA's DSCOVR EPIC camera."
        };
      case 'search':
        return {
          title: "NASA Image Library Search",
          subtitle: "Explore stunning space images.",
          action: "Search for galaxies, planets, or any cosmic wonder."
        };
      default:
        return { title: "", subtitle: "", action: "" };
    }
  };

  return (
    <>
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={{ minHeight: '100vh', background: 'none', position: "relative" }}>
        <Header active={active} setActive={handleTabChange} onSearch={handleHeaderSearch} />

        <div className="container py-4 main-content">
          {error && <div className="alert alert-danger">{error}</div>}

          {active === 'apod' && (
            <div className="main-content d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
              <div className="glass-bg text-center mb-4">
                <h2 style={{ fontWeight: 700, fontSize: "2.3rem", letterSpacing: 2 }}>
                  {getWelcomeContent().title}
                </h2>
                <div style={{ fontSize: "1.19rem", opacity: 0.84, marginBottom: 4 }}>
                  {getWelcomeContent().subtitle}
                </div>
                <div style={{ fontSize: "1.09rem", color: "#9fd3ff", marginBottom: 22 }}>
                  {getWelcomeContent().action}
                </div>
              </div>
              <button
                onClick={fetchApod}
                className="btn btn-primary mb-3"
                disabled={apodLoading}
              >
                {apodLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Loading...
                  </>
                ) : (
                  "Show Astronomy Picture of the Day"
                )}
              </button>
              {apod && (
                <div className="glass-bg mt-4 text-center">
                  <h2>{apod.title}</h2>
                  <img src={apod.url} alt={apod.title} className="img-fluid rounded shadow mb-3" style={{ maxHeight: 400 }} />
                  <p className="mx-auto" style={{ maxWidth: 600 }}>{apod.explanation}</p>
                  <p><i>Date: {apod.date}</i></p>
                </div>
              )}
            </div>
          )}

          {active === 'mars' && (
            <div
              className="main-content d-flex flex-column align-items-center justify-content-center"
              style={{ minHeight: '80vh' }}
            >
              <div className="glass-bg text-center mb-4">
                <h2 style={{ fontWeight: 700, fontSize: "2.3rem", letterSpacing: 2 }}>
                  {getWelcomeContent().title}
                </h2>
                <div style={{ fontSize: "1.19rem", opacity: 0.84, marginBottom: 4 }}>
                  {getWelcomeContent().subtitle}
                </div>
                <div style={{ fontSize: "1.09rem", color: "#9fd3ff", marginBottom: 22 }}>
                  {getWelcomeContent().action}
                </div>
              </div>
              <button
                onClick={fetchEpic}
                className="btn btn-success mb-3"
                disabled={epicLoading}
              >
                {epicLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Loading...
                  </>
                ) : (
                  "Show Latest Earth Image (EPIC)"
                )}
              </button>
              {epic && (
                <div className="glass-bg mt-4 text-center">
                  <h2>Earth as seen by DSCOVR EPIC</h2>
                  <img
                    src={epic.imageUrl}
                    alt={epic.caption}
                    className="img-fluid rounded shadow mb-3"
                    style={{ maxHeight: 400 }}
                  />
                  <p className="mx-auto" style={{ maxWidth: 600 }}>
                    {epic.caption}
                  </p>
                  <p>
                    <i>Date: {epic.date}</i>
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Image Search */}
          {active === 'search' && (
            <div>
              <form
                onSubmit={e => { e.preventDefault(); fetchNasaImages(); }}
                className="mb-4 d-flex justify-content-center align-items-center"
              >
                <input
                  type="text"
                  value={searchTerm}
                  placeholder="Search NASA Images"
                  onChange={e => setSearchTerm(e.target.value)}
                  className="form-control"
                  style={{ maxWidth: 350, marginRight: 10 }}
                  required
                />
                <button
                  type="submit"
                  className="btn btn-info"
                  disabled={searchLoading}
                >
                  {searchLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Loading...
                    </>
                  ) : (
                    "Search"
                  )}
                </button>
              </form>
              {searchImages.length > 0 && (
                <div className="row">
                  {searchImages.map((item, idx) => {
                    const data = item.data[0];
                    const imgSrc = item.links && item.links[0]?.href;
                    return (
                      <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card bg-dark text-light h-100">
                          <img src={imgSrc} alt={data.title} className="card-img-top rounded-top" style={{ background: '#222', height: 170, objectFit: 'cover' }} />
                          <div className="card-body">
                            <b>{data.title}</b>
                            <p style={{ fontSize: '0.93em' }}>{data.description?.slice(0, 80) || ''}{data.description && data.description.length > 80 && '...'}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Result not found message */}
              {!searchLoading && searchTerm && searchImages.length === 0 && (
                <div className="text-center text-warning my-4" style={{ fontSize: "1.2rem" }}>
                  Result not found
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
