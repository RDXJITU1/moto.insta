import React from 'react'

function profile() {
  return (
    <div>
    
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white p-4 md:p-8">
      {/* Profile Section */}
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 border-b border-gray-700 pb-8">
          {/* Profile Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
              alt="profile"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-pink-500 shadow-lg"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <h1 className="text-3xl font-bold">jitendra_das</h1>

              <button className="bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded-xl font-semibold transition">
                Follow
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-8 mt-6 text-lg">
              <p>
                <span className="font-bold">24</span> posts
              </p>
              <p>
                <span className="font-bold">12k</span> followers
              </p>
              <p>
                <span className="font-bold">500</span> following
              </p>
            </div>

            {/* Bio */}
            <div className="mt-5 space-y-1">
              <h2 className="font-bold text-xl">Jitendra Das</h2>
              <p className="text-gray-300">Frontend Developer 🚀</p>
              <p className="text-gray-400">
                React • Tailwind CSS • JavaScript
              </p>
            </div>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {[
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600",
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600",
            "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=600",
            "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=600",
            "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=600",
          ].map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={img}
                alt="post"
                className="w-full h-52 md:h-72 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>




    </div>
  )
}

export default profile