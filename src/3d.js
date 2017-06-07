import {points}         from './primitiveTypes/points.js';
import {lines}          from './primitiveTypes/lines.js';
import {linesLoop}      from './primitiveTypes/linesLoop.js';
import {linesStrip}     from './primitiveTypes/linesStrip.js';
import {triangles}      from './primitiveTypes/triangles.js';
import {trianglesStrip} from './primitiveTypes/trianglesStrip.js';
import {trianglesFan}   from './primitiveTypes/trianglesFan.js';
import {drawTriangles}  from './draw/drawTriangles.js';

export default function() {

    var origin          = [0, 0],
        scale           = 1,
        distance        = 1,
        angleX          = 0,
        angleY          = 0,
        angleZ          = 0,
        primitiveType   = 'POINTS',
        processData = {
            POINTS          : points,
            LINES           : lines,
            LINES_LOOP      : linesLoop,
            LINES_STRIP     : linesStrip,
            TRIANGLES       : triangles,
            TRIANGLES_STRIP : trianglesStrip,
            TRIANGLES_FAN   : trianglesFan
        },
        draw = {
            TRIANGLES   : drawTriangles
        };


    function _3d(data){
        return processData[primitiveType](data, angleX, angleY, angleZ, origin, scale, distance);
    }

    _3d.origin = function(_){
        return arguments.length ? (origin = _, _3d) : origin;
    };

    _3d.scale = function(_){
        return arguments.length ? (scale = _, _3d) : scale;
    };

    _3d.distance = function(_){
        return arguments.length ? (distance = _, _3d) : distance;
    };

    _3d.rotateX = function(_){
        return arguments.length ? (angleX = _, _3d) : angleX;
    };

    _3d.rotateY = function(_){
        return arguments.length ? (angleY = _, _3d) : angleY;
    };

    _3d.rotateZ = function(_){
        return arguments.length ? (angleZ = _, _3d) : angleZ;
    };

    _3d.primitiveType = function(_){
        return arguments.length ? (primitiveType = _, _3d) : primitiveType;
    };

    _3d.draw = function(d){
        if(primitiveType !== 'POINTS' || primitiveType !== 'LINES'){
            return draw[primitiveType](d);
        }
    };

    return _3d;
}
