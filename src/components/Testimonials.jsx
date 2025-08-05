import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Darlene Robertson",
      email: "nina.glover@example.com",
      content: "Lorem ipsum dolor sit amet consectetur. Euismod sit commodo sit rhoncus ut convallis vitae bibendum lacus. Lorem sit in odio ac nullam ut blandit nisl faucibus turpis. Verius volutpat."
    },
    {
      name: "Cameron Williamson", 
      email: "trent.king@example.com",
      content: "Lorem ipsum dolor sit amet consectetur. Massa tortor nibh nulla orci arcu nulla. Vitae dapibus habitasse cursus facilisis. Ut volutpat cursus cum donec pellentesque purus at"
    },
    {
      name: "Jacob Jones",
      email: "dolores.chambers@example.com", 
      content: "Lorem ipsum dolor sit amet consectetur. Consequat non phasretta tincidunt tristique dictum sed tincidunt. Nibh commodo morbi mauris pellentesque bibendum odio nisl."
    },
    {
      name: "Guy Hawkins",
      email: "michelle.rivera@example.com",
      content: "Lorem ipsum dolor sit amet consectetur. Phasellus velit bibendum orci enim consectetur sit. Tincidunt arci nulla sit rhoncus tempor nec ut uma et convallis arcus."
    },
    {
      name: "Marvin McKinney",
      email: "sara.cruz@example.com",
      content: "Lorem ipsum dolor sit amet consectetur. Adipiscing egestas volutpat tincidunt tempor sit adipiscing tempor et lorem. Ac tortor tempor condimentum adipiscing. In sit"
    },
    {
      name: "Kristin Watson",
      email: "jessica.hanson@example.com", 
      content: "Lorem ipsum dolor sit amet consectetur. Nullam sit viverra integer laoreet odio. Sagittis arcu vitae sem dui veleula tellus ets sit aliquam. Viverra aliquet risus ante in accumsan."
    },
    {
      name: "Ronald Richards",
      email: "sara.cruz@example.com",
      content: "Lorem ipsum dolor sit amet consectetur. Tempus orci lacus quis pellentesque. Et et eu gravida bibendum cursus mattis odio sed. Tortor nisl id volutpat dui morbi tempor vgestas senean ante. Morbi libero mattis libero sapien tempor malesuada risus. Rhoncus massa sagittis ut dui tempor quis tellus."
    },
    {
      name: "Esther Howard",
      email: "georgia.young@example.com",
      content: "Lorem ipsum dolor sit amet consectetur. Ultrices pellentesque lobortis et vitae elit mauris pellentesque praesent sed mauris ac pellentesque morbi magna porta et."
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            TESTIMONIALS
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900">
            What our users say about<br />
            their experience
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border-2 border-orange-500 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 text-xs">👤</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.email}</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;