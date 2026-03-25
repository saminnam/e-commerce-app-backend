import Profile from "../models/Profile.js";

export const getProfile = async (req, res) => {
  try {
    // req.user comes from the middleware we just fixed
    const profile = await Profile.findOne({ userId: req.user.id }); 
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const upsertProfile = async (req, res) => {
  try {
    // req.user.id comes from the auth middleware
    const updatedProfile = await Profile.findOneAndUpdate(
      { userId: req.user.id }, 
      { 
        ...req.body, 
        userId: req.user.id // Ensure the link stays intact
      },
      { new: true, upsert: true } // upsert: true is the magic part
    );
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: "Failed to sync profile", error });
  }
};

export const deleteProfile = async (req, res) => {
  try {
    if (!req.user?.id)
      return res.status(401).json({ message: "Unauthorized" });

    await Profile.findOneAndDelete({ userId: req.user.id });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
