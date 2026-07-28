function Settings() {
  return (
    <section className="screen" id="settings">
      <h1 className="page-title">Settings</h1>

      <div className="settings-wrap">
        <div className="profile-row">
          <div className="avatar">IO</div>
          <div>
            <div className="profile-name">Israel Ogunbiyi</div>
            <div className="profile-sub">
              Premium plan · 3 profiles on this account
            </div>
          </div>
        </div>

        {/* Playback */}
        <div className="settings-group">
          <div className="settings-group-label">Playback</div>

          <div className="settings-list">
            <div className="settings-row">
              <div className="settings-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" fill="currentColor" stroke="none" />
                </svg>
              </div>

              <div className="settings-text">
                <div className="st-title">Autoplay next episode</div>
                <div className="st-sub">
                  Starts the next episode automatically
                </div>
              </div>

              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="track"></span>
              </label>
            </div>

            <div className="settings-row">
              <div className="settings-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M3 12h4l3 8 4-16 3 8h4" />
                </svg>
              </div>

              <div className="settings-text">
                <div className="st-title">Autoplay previews</div>
                <div className="st-sub">
                  Plays a preview while browsing
                </div>
              </div>

              <label className="switch">
                <input type="checkbox" />
                <span className="track"></span>
              </label>
            </div>

            <div className="settings-row">
              <div className="settings-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                </svg>
              </div>

              <div className="settings-text">
                <div className="st-title">Playback quality</div>
                <div className="st-sub">Auto (up to 4K)</div>
              </div>

              <svg
                className="chev"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Audio */}
        <div className="settings-group">
          <div className="settings-group-label">
            Audio and subtitles
          </div>

          <div className="settings-list">
            <div className="settings-row">
              <div className="settings-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 9v6h4l5 5V4L8 9H4z" />
                </svg>
              </div>

              <div className="settings-text">
                <div className="st-title">Audio language</div>
                <div className="st-sub">English</div>
              </div>

              <svg
                className="chev"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </div>

            <div className="settings-row">
              <div className="settings-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h10M4 18h7" />
                </svg>
              </div>

              <div className="settings-text">
                <div className="st-title">Subtitles</div>
                <div className="st-sub">Off</div>
              </div>

              <svg
                className="chev"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Account */}
        <div className="settings-group">
          <div className="settings-group-label">Account</div>

          <div className="settings-list">
            <div className="settings-row">
              <div className="settings-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.7 21a2 2 0 0 1-3.4 0" />
                </svg>
              </div>

              <div className="settings-text">
                <div className="st-title">Notifications</div>
                <div className="st-sub">
                  New episodes and recommendations
                </div>
              </div>

              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="track"></span>
              </label>
            </div>

            <div className="settings-row">
              <div className="settings-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
              </div>

              <div className="settings-text">
                <div className="st-title">Parental controls</div>
                <div className="st-sub">
                  PIN required for mature content
                </div>
              </div>

              <svg
                className="chev"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </div>

            <div className="settings-row">
              <div className="settings-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="6" width="18" height="12" rx="2" />
                  <path d="M3 10h18" />
                </svg>
              </div>

              <div className="settings-text">
                <div className="st-title">Manage plan and billing</div>
                <div className="st-sub">Premium · $17.99/mo</div>
              </div>

              <svg
                className="chev"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </div>

            <div className="settings-row">
              <div className="settings-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
              </div>

              <div className="settings-text">
                <div className="st-title">About</div>
                <div className="st-sub">Version 4.2.1</div>
              </div>

              <svg
                className="chev"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Settings;