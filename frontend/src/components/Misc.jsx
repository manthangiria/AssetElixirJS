import React, { useState } from 'react';
import { 
  MapPin, 
  Newspaper, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  X, 
  Globe, 
  Building2 
} from 'lucide-react';

const Misc = () => {
  // --- Office Locations State ---
  const [locations, setLocations] = useState([
    { id: 1, name: "Kharghar Office", address: "Sector 12, Navi Mumbai", mapLink: "#" },
    { id: 2, name: "Mumbai HQ", address: "Nariman Point, Mumbai", mapLink: "#" }
  ]);
  const [newLocation, setNewLocation] = useState({ name: "", address: "", mapLink: "" });
  const [editingLoc, setEditingLoc] = useState(null);

  // --- Publications State ---
  const [publications, setPublications] = useState([
    "The Economic Times", "Moneycontrol", "Mint", "Financial Express"
  ]);
  const [newPub, setNewPub] = useState("");

  // --- Handlers for Locations ---
  const handleAddLocation = () => {
    if (!newLocation.name) return;
    setLocations([...locations, { ...newLocation, id: Date.now() }]);
    setNewLocation({ name: "", address: "", mapLink: "" });
  };

  const deleteLocation = (id) => setLocations(locations.filter(l => l.id !== id));

  // --- Handlers for Publications ---
  const addPublication = () => {
    if (!newPub || publications.includes(newPub)) return;
    setPublications([...publications, newPub]);
    setNewPub("");
  };

  const deletePublication = (name) => setPublications(publications.filter(p => p !== name));

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        
        <header className="mb-12">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Miscellaneous Management</h1>
          <p className="text-slate-500 mt-2">Control the dynamic data displayed across Asset Elixir.</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          
          {/* Section 1: Office Locations */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-black p-2 rounded-lg text-[#fa9632]">
                  <Building2 className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-black text-slate-900">Office Locations</h2>
              </div>

              {/* Add/Edit Location Form */}
              <div className="space-y-4 mb-10 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <input 
                  type="text" 
                  placeholder="Location Name (e.g. Navi Mumbai)"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#fa9632] outline-none font-bold"
                  value={newLocation.name}
                  onChange={(e) => setNewLocation({...newLocation, name: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Full Address"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#fa9632] outline-none"
                  value={newLocation.address}
                  onChange={(e) => setNewLocation({...newLocation, address: e.target.value})}
                />
                <button 
                  onClick={handleAddLocation}
                  className="w-full bg-[#fa9632] text-black py-3 rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black hover:text-[#fa9632] transition-all"
                >
                  <Plus className="w-4 h-4" /> Add Location
                </button>
              </div>

              {/* Locations List */}
              <div className="space-y-4">
                {locations.map((loc) => (
                  <div key={loc.id} className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-start gap-4">
                      <MapPin className="text-[#fa9632] w-5 h-5 mt-1" />
                      <div>
                        <p className="font-bold text-slate-900">{loc.name}</p>
                        <p className="text-xs text-slate-500">{loc.address}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => deleteLocation(loc.id)}
                      className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Publications & Magazines */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-black p-2 rounded-lg text-[#fa9632]">
                  <Newspaper className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-black text-slate-900">Featured In</h2>
              </div>

              {/* Add Publication Input */}
              <div className="flex gap-2 mb-8">
                <input 
                  type="text" 
                  placeholder="Magazine/Publication Name"
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#fa9632] outline-none font-bold"
                  value={newPub}
                  onChange={(e) => setNewPub(e.target.value)}
                />
                <button 
                  onClick={addPublication}
                  className="bg-black text-[#fa9632] p-3 px-6 rounded-xl font-bold hover:bg-[#fa9632] hover:text-black transition-all"
                >
                  Add
                </button>
              </div>

              {/* Publications List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {publications.map((pub) => (
                  <div key={pub} className="flex items-center justify-between px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl group">
                    <span className="text-sm font-bold text-slate-700">{pub}</span>
                    <button 
                      onClick={() => deletePublication(pub)}
                      className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500 transition-all"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-slate-400">
                <Globe className="w-4 h-4" />
                <p className="text-[10px] uppercase font-bold tracking-tighter">
                  These names update the infinite marquee on the Home page.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Misc;