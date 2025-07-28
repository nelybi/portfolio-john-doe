import { useEffect, useState } from "react";

export default function ModalGithub({ show, onClose }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (show) {
      fetch("https://api.github.com/users/github-john-doe")
        .then((res) => res.json())
        .then((data) => setProfile(data));
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="modal d-block" tabIndex="-1" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Profil GitHub</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            {profile ? (
              <>
                <img
                  src={profile.avatar_url}
                  alt={profile.login}
                  className="img-fluid rounded mb-3"
                />
                <p>
                  <strong>Nom :</strong> {profile.name || profile.login}
                </p>
                <p>
                  <strong>Bio :</strong> {profile.bio}
                </p>
                <p>
                  <a href={profile.html_url} target="_blank" rel="noreferrer">
                    Voir le profil complet
                  </a>
                </p>
              </>
            ) : (
              <p>Chargement…</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
