import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, Users, BarChart } from "lucide-react";

// Types for our data
type Course = {
  id: number;
  name: string;
  students: number;
  averageGrade: number;
  nextClass: string;
};

type StudentStats = {
  courseName: string;
  grade: number;
  attendance: number;
  nextAssignment: string;
};

const Home = () => {
  const [isTeacher] = useState(true);
  const [courses] = useState<Course[]>([
    {
      id: 1,
      name: "Matemáticas Avanzadas",
      students: 25,
      averageGrade: 85,
      nextClass: "2024-12-20 10:00"
    },
    {
      id: 2,
      name: "Física Básica",
      students: 30,
      averageGrade: 78,
      nextClass: "2024-12-19 14:30"
    }
  ]);

  const [studentStats] = useState<StudentStats[]>([
    {
      courseName: "Matemáticas Avanzadas",
      grade: 88,
      attendance: 95,
      nextAssignment: "Ecuaciones Diferenciales - 2024-12-22"
    },
    {
      courseName: "Física Básica",
      grade: 92,
      attendance: 98,
      nextAssignment: "Leyes de Newton - 2024-12-21"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {isTeacher ? 'Panel del Profesor' : 'Panel del Estudiante'}
          </h1>
          <Link to="/">
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors">
              Regresar
            </button>
          </Link>
        </div>

        {isTeacher ? (
          // Teacher View
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map(course => (
              <div key={course.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    {course.name}
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span>{course.students} estudiantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart className="h-4 w-4 text-gray-500" />
                    <span>Promedio: {course.averageGrade}%</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Próxima clase: {course.nextClass}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Student View
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studentStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    {stat.courseName}
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <BarChart className="h-4 w-4 text-gray-500" />
                    <span>Calificación: {stat.grade}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span>Asistencia: {stat.attendance}%</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Próxima tarea: {stat.nextAssignment}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;