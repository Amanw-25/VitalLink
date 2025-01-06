import React, { useState ,useEffect} from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaCameraRetro } from 'react-icons/fa';
import uploadImagetoCloudinary from '../../utils/uploadCloudinary';
import { BASE_URL, token } from '../../config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Profile = ({ doctorData }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Initialize form data from localStorage or default values
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('user');
    return savedData ? JSON.parse(savedData) : {
      name: '',
      email: '',
      password: '',
      phone: '',
      bio: '',
      gender: '',
      specialization: '',
      ticketPrice: '100',
      about: '',
      qualifications: [{ startingDate: '', endingDate: '', degree: '', institution: '' }],
      experiences: [{ startDate: '', endDate: '', position: '', hospital: '' }],
      timeSlots: [{ day: '', startTime: '', endTime: '' }],
      photo: '',
    };
  });
  const doctorData1 = JSON.parse(localStorage.getItem('user'));
  const doctorId = doctorData ? doctorData._id : null;
  const navigate = useNavigate();

    // Save to localStorage whenever formData changes
    useEffect(() => {
      localStorage.setItem('user', JSON.stringify(formData));
    }, [formData]);
  
    // Load existing doctor data if available
    useEffect(() => {
      if (doctorData) {
        setFormData(prevData => ({
          ...prevData,
          ...doctorData
        }));
      }
    }, [doctorData]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQualificationChange = (e, index) => {
    const updatedQualifications = [...formData.qualifications];
    updatedQualifications[index][e.target.name] = e.target.value;
    setFormData({ ...formData, qualifications: updatedQualifications });
  };

  const handleExperienceChange = (e, index) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index][e.target.name] = e.target.value;
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const handleTimeSlotChange = (e, index) => {
    const updatedTimeSlots = [...formData.timeSlots];
    updatedTimeSlots[index][e.target.name] = e.target.value;
    setFormData({ ...formData, timeSlots: updatedTimeSlots });
  };

  const handleDeleteQualification = (e, index) => {
    e.preventDefault();
    const updatedQualifications = formData.qualifications.filter((_, i) => i !== index);
    setFormData({ ...formData, qualifications: updatedQualifications });
  };

  const handleDeleteExperience = (e, index) => {
    e.preventDefault();
    const updatedExperiences = formData.experiences.filter((_, i) => i !== index);
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const handleDeleteTimeSlot = (e, index) => {
    e.preventDefault();
    const updatedTimeSlots = formData.timeSlots.filter((_, i) => i !== index);
    setFormData({ ...formData, timeSlots: updatedTimeSlots });
  };

  const handleAddQualification = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      qualifications: [
        ...formData.qualifications,
        { startingDate: '', endingDate: '', degree: '', institution: '' },
      ],
    });
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
        { startDate: '', endDate: '', position: '', hospital: '' },
      ],
    });
  };

  const handleAddTimeSlot = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      timeSlots: [...formData.timeSlots, { day: '', startTime: '', endTime: '' }],
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const data = await uploadImagetoCloudinary(file);

    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const updateProfileHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData1._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const message = await res.json();
      if (!res.ok) {
        throw new Error(message.message);
      }

      setLoading(false);
      toast.success(message.message);
      navigate('/doctors/profile/me');
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>
      <form>
        {/* Name Field */}
        <div className="mb-5">
          <p className="form__label">
            Name<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="form_input"
          />
        </div>

        {/* Email Field */}
        <div className="mb-5">
          <p className="form__label">
            Email<span className="text-red-500">*</span>
          </p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="form_input"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <p className="form__label">
            Password<span className="text-red-500">*</span>
          </p>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            className="form_input"
          />
        </div>

        {/* Phone Number Field */}
        <div className="mb-5">
          <p className="form__label">
            Phone Number<span className="text-red-500">*</span>
          </p>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            className="form_input"
          />
        </div>

        {/* Bio Field */}
        <div className="mb-5">
          <p className="form__label">
            Bio<span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Enter your Bio"
            className="form_input"
            maxLength={100}
          />
        </div>

        {/* Gender, Specialization, Ticket Price */}
        <div className="grid grid-cols-3 gap-4 mb-[30px]">
          {/* Gender Field */}
          <div>
            <p className="form__label">
              Gender<span className="text-red-500">*</span>
            </p>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="form__input w-[175px]"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Specialization Field */}
          <div>
            <p className="form__label">
              Specialization<span className="text-red-500">*</span>
            </p>
            <select
              name="specialization"
              value={formData.specialization}
              onChange={handleInputChange}
              className="form__input w-[215px]"
            >
              <option value="">Select Specialization</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="dermatology">Dermatology</option>
            </select>
          </div>

          {/* Ticket Price Field */}
          <div>
            <p className="form__label">
              Ticket Price (₹)<span className="text-red-500">*</span>
            </p>
            <input
              type="number"
              name="ticketPrice"
              min="0"
              max="1000"
              value={formData.ticketPrice}
              onChange={handleInputChange}
              className="form__input"
            />
            <div className="text-sm text-gray-600 mt-2">
              Selected Price: ₹{formData.ticketPrice}
            </div>
          </div>
        </div>

        {/* Qualifications Section */}
        <div className="mb-5">
          <p className="form__label">Qualifications*</p>
          {formData.qualifications.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p>Starting Date<span className="text-red-500">*</span></p>
                  <input
                    type="date"
                    name="startingDate"
                    value={item.startingDate}
                    onChange={(e) => handleQualificationChange(e, index)}
                    className="form_input mt-2"
                  />
                </div>
                <div>
                  <p>Ending Date<span className="text-red-500">*</span></p>
                  <input
                    type="date"
                    name="endingDate"
                    value={item.endingDate}
                    onChange={(e) => handleQualificationChange(e, index)}
                    className="form_input mt-2"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p>Degree<span className="text-red-500">*</span></p>
                  <input
                    type="text"
                    name="degree"
                    value={item.degree}
                    onChange={(e) => handleQualificationChange(e, index)}
                    className="form_input mt-2"
                  />
                </div>
                <div>
                  <p>Institute<span className="text-red-500">*</span></p>
                  <input
                    type="text"
                    name="institution"
                    value={item.institution}
                    onChange={(e) => handleQualificationChange(e, index)}
                    className="form_input mt-2"
                  />
                </div>
              </div>

              {/* Delete Button for Qualifications */}
              <button
                className="bg-red-600 rounded-full text-white text-[18px] font-semibold px-4 py-1 mt-5 mb-30 cursor-pointer"
                onClick={(e) => handleDeleteQualification(e, index)}
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}
          <button
            className="bg-[#000] py-2 px-4 text-white text-[13px] font-semibold rounded-md mt-4"
            onClick={handleAddQualification}
          >
            Add Qualification
          </button>
        </div>

        {/* Experiences Section */}
        <div className="mb-5">
          <p className="form__label">Experiences*</p>
          {formData.experiences.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p>Start Date<span className="text-red-500">*</span></p>
                  <input
                    type="date"
                    name="startDate"
                    value={item.startDate}
                    onChange={(e) => handleExperienceChange(e, index)}
                    className="form_input mt-2"
                  />
                </div>
                <div>
                  <p>End Date<span className="text-red-500">*</span></p>
                  <input
                    type="date"
                    name="endDate"
                    value={item.endDate}
                    onChange={(e) => handleExperienceChange(e, index)}
                    className="form_input mt-2"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p>Position<span className="text-red-500">*</span></p>
                  <input
                    type="text"
                    name="position"
                    value={item.position}
                    onChange={(e) => handleExperienceChange(e, index)}
                    className="form_input mt-2"
                  />
                </div>
                <div>
                  <p>Hospital<span className="text-red-500">*</span></p>
                  <input
                    type="text"
                    name="hospital"
                    value={item.hospital}
                    onChange={(e) => handleExperienceChange(e, index)}
                    className="form_input mt-2"
                  />
                </div>
              </div>

              {/* Delete Button for Experience */}
              <button
                className="bg-red-600 rounded-full text-white text-[18px] font-semibold px-4 py-1 mt-5 mb-30 cursor-pointer"
                onClick={(e) => handleDeleteExperience(e, index)}
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}
          <button
            className="bg-[#000] py-2 px-4 text-white text-[13px] font-semibold rounded-md mt-4"
            onClick={handleAddExperience}
          >
            Add Experience
          </button>
        </div>

        {/* Time Slots Section */}
        <div className="mb-5">
          <p className="form__label">Time Slots*</p>
          {formData.timeSlots.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p>Day<span className="text-red-500">*</span></p>
                  <select
                    name="day"
                    value={item.day}
                    onChange={(e) => handleTimeSlotChange(e, index)}
                    className="form_input mt-2"
                  >
                    <option value="">Select Day</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                </div>
                <div>
                  <p>Start Time<span className="text-red-500">*</span></p>
                  <input
                    type="time"
                    name="startTime"
                    value={item.startTime}
                    onChange={(e) => handleTimeSlotChange(e, index)}
                    className="form_input mt-2"
                  />
                </div>
                <div>
                  <p>End Time<span className="text-red-500">*</span></p>
                  <input
                    type="time"
                    name="endTime"
                    value={item.endTime}
                    onChange={(e) => handleTimeSlotChange(e, index)}
                    className="form_input mt-2"
                  />
                </div>
              </div>
              {/* Delete Button for Time Slot */}
              <button
                className="bg-red-600 rounded-full text-white text-[18px] font-semibold px-4 py-1 mt-5 mb-30 cursor-pointer"
                onClick={(e) => handleDeleteTimeSlot(e, index)}
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}
          <button
            className="bg-[#000] py-2 px-4 text-white text-[13px] font-semibold rounded-md mt-4"
            onClick={handleAddTimeSlot}
          >
            Add Time Slot
          </button>
        </div>


        {/* About Section as Text Area */}
        <div className="mb-5">
          <p className="form__label">
            About<span className="text-red-500">*</span>
          </p>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleInputChange}
            placeholder="Write a brief about yourself"
            className="form_input"
            rows={4}
          />
        </div>

        {/* Upload Photo Icon */}
        <div className="mb-5">
          <p className="form__label">Upload Photo</p>
          <label htmlFor="photo-upload" className="cursor-pointer text-blue-600">
            <FaCameraRetro size={40} style={{ color: "black" }} />
          </label>
          <input
            type="file"
            id="photo-upload"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          {formData.photo && (
            <div className="mt-3">
              <img src={formData.photo} alt="Profile" className="w-32 h-32 rounded-full" />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-primaryColor text-white font-semibold rounded-md"
            onClick={updateProfileHandler}
          >
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
